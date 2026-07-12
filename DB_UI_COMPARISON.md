# Phân Tích So Sánh: DB Schema vs UI - Quản Lý Camera & Kênh

## 1. CAMERA MANAGEMENT (camera_cfg)

### Database Schema (dvms.prisma)
```
model camera_cfg {
  id            String    @id @db.VarChar(40)        // Primary key - UUID
  name          String?   @db.VarChar(64)            // Camera name/label
  search_tag    String?   @db.VarChar(256)           // Search tags for filtering
  cfg_data      Bytes?                               // Binary config data (EXCLUDING)
  user_id_owner String?   @db.VarChar(40)            // Owner user ID
  time_created  DateTime? @db.Timestamp(6)           // Creation timestamp
  time_modified DateTime? @db.Timestamp(6)           // Last modified timestamp
  
  @@index([user_id_owner], type: Hash)
}
```

### Frontend UI Fields (DeviceInfo Type & DevicesPage Component)
```typescript
interface DeviceInfo {
  id: string                    // Maps to: camera_cfg.id
  name: string                  // Maps to: camera_cfg.name
  description: string           // ❌ NO MATCH IN DB - Extra UI field
  tag: string                   // ❌ NO MATCH IN DB - Not same as search_tag
  owner: string                 // Maps to: camera_cfg.user_id_owner (but stores name, not ID)
  type: string                  // ❌ NO MATCH IN DB - Extra UI field (e.g., "ONVIF CAMERA")
  mainStream: string            // ❌ NO MATCH IN DB - Extra UI field (e.g., "H264 1920x1080")
  subStream: string             // ❌ NO MATCH IN DB - Extra UI field (e.g., "H264 704x576")
  ip: string                    // ❌ NO MATCH IN DB - Extra UI field
  onvifPort: string             // ❌ NO MATCH IN DB - Extra UI field
  rtspPort: string              // ❌ NO MATCH IN DB - Extra UI field
  storageStream: string         // ❌ NO MATCH IN DB - Extra UI field
  username: string              // ❌ NO MATCH IN DB - Extra UI field
  password?: string             // ❌ NO MATCH IN DB - Extra UI field
}
```

### ✅ MATCHED FIELDS
| Database Field | UI Field | Status |
|---|---|---|
| `id` | `id` | ✅ Exact Match |
| `name` | `name` | ✅ Exact Match |
| `user_id_owner` | `owner` | ⚠️ Type mismatch (stores ID in DB, but UI shows name) |
| `time_created` | - | ⚠️ Not displayed in UI |
| `time_modified` | - | ⚠️ Not displayed in UI |
| `search_tag` | `tag` | ❓ Different semantic meaning |

### ❌ MISMATCHED / MISSING IN DB
| UI Field | Database Match | Issue |
|---|---|---|
| `description` | None | **Missing in DB** |
| `type` | None | **Missing in DB** (e.g., "ONVIF CAMERA", "RTSP CAMERA") |
| `mainStream` | None | **Missing in DB** (e.g., "H264 1920x1080 (profile_c)") |
| `subStream` | None | **Missing in DB** (e.g., "H264 704x576 (profile_can)") |
| `ip` | None | **Missing in DB** |
| `onvifPort` | None | **Missing in DB** |
| `rtspPort` | None | **Missing in DB** |
| `storageStream` | None | **Missing in DB** (e.g., "Main Stream", "Sub Stream") |
| `username` | None | **Missing in DB** |
| `password` | None | **Missing in DB** |

---

## 2. CHANNEL MANAGEMENT (channel_cfg)

### Database Schema (dvms.prisma)
```
model channel_cfg {
  id                String    @id @db.VarChar(40)    // Primary key - UUID
  name              String?   @db.VarChar(64)        // Channel name/label
  camera_mapping_id String?   @db.VarChar(64)        // Reference to camera_cfg.id (implicit FK)
  search_tag        String?   @db.VarChar(256)       // Search tags for filtering
  cfg_data          Bytes?                           // Binary config data (EXCLUDING)
  user_id_owner     String?   @db.VarChar(40)        // Owner user ID
  time_created      DateTime? @db.Timestamp(6)       // Creation timestamp
  time_modified     DateTime? @db.Timestamp(6)       // Last modified timestamp
  
  @@index([camera_mapping_id], type: Hash)
  @@index([user_id_owner], type: Hash)
}
```

### Frontend UI Fields (ChannelInfo Type & DevicesPage Component)
```typescript
interface ChannelInfo {
  stt: number          // ❌ NO MATCH IN DB - Channel sequence/order number
  name: string         // Maps to: channel_cfg.name
  cameraName: string   // Maps to: camera name referenced via camera_mapping_id
}
```

### ✅ MATCHED FIELDS
| Database Field | UI Field | Status |
|---|---|---|
| `id` | - | ⚠️ Not used in UI state (derived from stt) |
| `name` | `name` | ✅ Exact Match |
| `camera_mapping_id` | `cameraName` | ⚠️ Stores camera_cfg.id in DB, but UI displays camera name |
| `time_created` | - | ⚠️ Not displayed in UI |
| `time_modified` | - | ⚠️ Not displayed in UI |

### ❌ MISMATCHED / MISSING
| UI Field | Database Match | Issue |
|---|---|---|
| `stt` | None | **Missing in DB** - UI uses sequential number, DB uses UUID |

### 🔑 KEY ISSUE: Missing Explicit Foreign Key
- **DB stores**: `camera_mapping_id` (String UUID referencing camera_cfg.id)
- **UI displays**: `cameraName` (human-readable camera name)
- **Current Implementation**: Channel stores reference to camera UUID, but UI needs camera name for display
- **No explicit FK constraint** in schema (implicit relationship through id reference)

---

## 3. CURRENT UI INITIALIZATION (Hard-Coded Data)

### Channel Data (DevicesPage.tsx, line 68-82)
```typescript
const initialChannels = [
  { stt: 1, name: 'Camera Truoc', cameraName: 'Camera ZKTeco Number 1' },
  { stt: 2, name: 'Camera Sau', cameraName: 'Camera ZKTeco Number 2' },
  { stt: 3, name: 'Channel 3', cameraName: 'Cam duoi san' },
  { stt: 4, name: 'Channel 4', cameraName: 'Không Chọn' },
  // ... up to stt: 17
];
```

**Observations:**
- ✅ Channels 1-3 have actual camera mappings
- ✅ Channels 4-17 are unassigned ("Không Chọn")
- ❌ Data is hard-coded, not loaded from database
- ❌ No persistence to database

---

## 4. SUMMARY OF DATA ALIGNMENT ISSUES

### For camera_cfg → DeviceInfo
| Category | Status | Details |
|---|---|---|
| **Matching Fields** | 50% | Only `id` and `name` are properly aligned |
| **Field Mismatch** | `owner` | Stores user_id, UI needs user_name |
| **Missing in DB** | 10 fields | `description`, `type`, `mainStream`, `subStream`, `ip`, `onvifPort`, `rtspPort`, `storageStream`, `username`, `password` |
| **Not displayed** | 3 fields | `search_tag`, `time_created`, `time_modified` |

### For channel_cfg → ChannelInfo
| Category | Status | Details |
|---|---|---|
| **Matching Fields** | 50% | Only `name` is properly aligned |
| **Missing in DB** | 1 field | `stt` (sequence number - should be index/order) |
| **Indirect Mapping** | `cameraName` | Requires join with camera_cfg table |
| **Not displayed** | 3 fields | `search_tag`, `time_created`, `time_modified` |

---

## 5. QUESTIONS & RECOMMENDATIONS

### Questions to Clarify
1. **Where are camera connection details stored?** (`ip`, `port`, `username`, `password`)
   - Should they be in `cfg_data` (binary blob)?
   - Or need new schema fields?

2. **Camera streaming profiles?** (`mainStream`, `subStream`)
   - Are these camera capabilities or configurations?
   - Should they be dynamic from ONVIF discovery?

3. **Channel ordering (stt)?**
   - Should `stt` be stored in DB as an explicit `channel_index` or `order` field?
   - Currently implicit from array index in UI

4. **Device owner (owner field)?**
   - DB stores `user_id_owner` (UUID)
   - UI displays owner name
   - Need user lookup table or different storage?

### Recommendations
1. **Extend camera_cfg schema** to include missing fields:
   ```prisma
   model camera_cfg {
     // Existing fields...
     description    String?   @db.VarChar(256)   // Camera description
     device_type    String?   @db.VarChar(64)    // ONVIF, RTSP, etc.
     ip_address     String?   @db.VarChar(15)    // Camera IP
     onvif_port     Int?      @db.SmallInt       // ONVIF port
     rtsp_port      Int?      @db.SmallInt       // RTSP port
     storage_stream String?   @db.VarChar(64)    // Which stream to record
     username       String?   @db.VarChar(64)    // Camera login
     password       String?   @db.VarChar(255)   // Camera password (encrypted?)
     // Note: mainStream, subStream likely belong in separate profiles table
   }
   ```

2. **Extend channel_cfg schema** to include:
   ```prisma
   model channel_cfg {
     // Existing fields...
     channel_index  Int?      @db.SmallInt       // For ordering channels
     // camera_mapping_id already exists for FK
   }
   ```

3. **Add explicit relationships in Prisma**:
   ```prisma
   model channel_cfg {
     // ... fields ...
     camera_mapping_id String?   @db.VarChar(40)
     camera            camera_cfg?  @relation(fields: [camera_mapping_id], references: [id])
   }
   
   model camera_cfg {
     // ... fields ...
     channels          channel_cfg[]
   }
   ```

4. **Consider separate tables**:
   - `camera_profile` - For stream profiles (H264/H265 resolutions)
   - `camera_credentials` - For username/password (with encryption)

---

## 6. DATA FLOW DIAGRAM

```
DATABASE                    FRONTEND
─────────────────────────────────────────
camera_cfg                  DeviceInfo
├─ id ──────────────────── id ✅
├─ name ────────────────── name ✅
├─ user_id_owner ───────── owner ⚠️ (needs lookup)
├─ search_tag ──────────── tag ❓
├─ time_created ───────────► Not shown
├─ time_modified ──────────► Not shown
└─ cfg_data ────────────────► Excluded

    MISSING:
    description ◄─────────── from UI
    device_type ◄─────────── from UI
    ip_address ◄───────────── from UI
    onvif_port ◄────────────── from UI
    rtsp_port ◄─────────────── from UI
    storage_stream ◄────────── from UI
    username ◄──────────────── from UI
    password ◄───────────────── from UI
    mainStream ◄────────────── from UI
    subStream ◄─────────────── from UI


channel_cfg ────────────── ChannelInfo
├─ id ──────────────────── (not used in state)
├─ name ────────────────── name ✅
├─ camera_mapping_id ────┐
│                        └─ cameraName ⚠️ (needs camera name lookup)
├─ search_tag ──────────── Not shown
├─ time_created ────────── Not shown
├─ time_modified ───────── Not shown
└─ cfg_data ────────────── Excluded

    MISSING:
    stt ◄────────────────────── from UI (implicit in initialChannels array)
```

---

## 7. CONCLUSION

**Current State: 🔴 MISALIGNED**

The database schema and UI are **significantly misaligned**:

1. **Database has too few fields** for cameras (missing 10 critical fields)
2. **UI state is not persisted** to database (using mock/hard-coded data)
3. **Relationships are implicit**, not explicitly defined in schema
4. **Channel ordering depends on array index**, not stored in DB
5. **Sensitive data** (passwords) not accounted for in schema

**Recommendation**: Extend the DVMS schema before implementing data persistence, otherwise UI → DB mapping will be lossy and data loss will occur.
