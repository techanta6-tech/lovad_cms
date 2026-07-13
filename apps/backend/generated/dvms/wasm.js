
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Camera_cfgScalarFieldEnum = {
  id: 'id',
  name: 'name',
  search_tag: 'search_tag',
  cfg_data: 'cfg_data',
  user_id_owner: 'user_id_owner',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Camera_storage_totalScalarFieldEnum = {
  partition_path: 'partition_path',
  camera_id: 'camera_id',
  use_disk_mb: 'use_disk_mb',
  time_start: 'time_start',
  time_end: 'time_end',
  total_dur: 'total_dur',
  lost_dur: 'lost_dur'
};

exports.Prisma.Channel_cfgScalarFieldEnum = {
  id: 'id',
  name: 'name',
  camera_mapping_id: 'camera_mapping_id',
  search_tag: 'search_tag',
  cfg_data: 'cfg_data',
  user_id_owner: 'user_id_owner',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Device_owner_cfgScalarFieldEnum = {
  id: 'id',
  name: 'name',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Event_vms_sync_parentScalarFieldEnum = {
  id: 'id',
  lcms_server_id: 'lcms_server_id',
  event_vms_id: 'event_vms_id',
  source_id: 'source_id',
  event_time: 'event_time',
  data_file_path: 'data_file_path',
  partition_key: 'partition_key'
};

exports.Prisma.Event_vms_sync_update_parentScalarFieldEnum = {
  index: 'index',
  update_table_type: 'update_table_type',
  lcms_server_id: 'lcms_server_id',
  event_id: 'event_id',
  data_file_path: 'data_file_path',
  partition_key: 'partition_key'
};

exports.Prisma.Face_index_sync_parentScalarFieldEnum = {
  id: 'id',
  lcms_server_id: 'lcms_server_id',
  face_index_id: 'face_index_id',
  event_time: 'event_time',
  data_file_path: 'data_file_path',
  partition_key: 'partition_key'
};

exports.Prisma.Human_infoScalarFieldEnum = {
  id: 'id',
  lcms_server_id: 'lcms_server_id',
  document_id: 'document_id',
  id_type: 'id_type',
  release_date: 'release_date',
  issued_by: 'issued_by',
  full_name: 'full_name',
  gender: 'gender',
  birthday: 'birthday',
  phone_number: 'phone_number',
  email: 'email',
  address: 'address',
  note: 'note',
  company: 'company',
  list_ids: 'list_ids',
  is_deleted: 'is_deleted',
  avatars: 'avatars',
  id_scan_images: 'id_scan_images',
  other_images: 'other_images',
  root_face_images: 'root_face_images',
  cropped_face_images: 'cropped_face_images',
  face_features: 'face_features',
  time_created: 'time_created',
  time_modified: 'time_modified',
  height: 'height',
  weight: 'weight',
  certificates_json_text: 'certificates_json_text'
};

exports.Prisma.Human_listScalarFieldEnum = {
  id: 'id',
  lcms_server_id: 'lcms_server_id',
  name: 'name',
  is_deleted: 'is_deleted',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Monitoring_slot_summary_sync_parentScalarFieldEnum = {
  id: 'id',
  lcms_server_id: 'lcms_server_id',
  slot_summary_id: 'slot_summary_id',
  event_time: 'event_time',
  data_file_path: 'data_file_path',
  partition_key: 'partition_key'
};

exports.Prisma.Nvr_cfgScalarFieldEnum = {
  id: 'id',
  name: 'name',
  search_tag: 'search_tag',
  cfg_data: 'cfg_data',
  user_id_owner: 'user_id_owner',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Nvr_channel_cfgScalarFieldEnum = {
  id: 'id',
  nvr_id: 'nvr_id',
  nvr_channel_index: 'nvr_channel_index',
  name: 'name',
  search_tag: 'search_tag',
  cfg_data: 'cfg_data',
  user_id_owner: 'user_id_owner',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Vehicle_infoScalarFieldEnum = {
  id: 'id',
  lcms_server_id: 'lcms_server_id',
  license_plate: 'license_plate',
  name: 'name',
  type: 'type',
  manufacturer: 'manufacturer',
  color: 'color',
  color_license_plate: 'color_license_plate',
  images: 'images',
  vehicle_payload: 'vehicle_payload',
  note: 'note',
  list_ids: 'list_ids',
  is_deleted: 'is_deleted',
  time_created: 'time_created',
  time_modified: 'time_modified',
  card_code: 'card_code'
};

exports.Prisma.Vehicle_listScalarFieldEnum = {
  id: 'id',
  lcms_server_id: 'lcms_server_id',
  name: 'name',
  is_deleted: 'is_deleted',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Version_controlScalarFieldEnum = {
  id: 'id',
  type: 'type',
  tablename: 'tablename',
  version: 'version',
  timeupdated: 'timeupdated'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  camera_cfg: 'camera_cfg',
  camera_storage_total: 'camera_storage_total',
  channel_cfg: 'channel_cfg',
  device_owner_cfg: 'device_owner_cfg',
  event_vms_sync_parent: 'event_vms_sync_parent',
  event_vms_sync_update_parent: 'event_vms_sync_update_parent',
  face_index_sync_parent: 'face_index_sync_parent',
  human_info: 'human_info',
  human_list: 'human_list',
  monitoring_slot_summary_sync_parent: 'monitoring_slot_summary_sync_parent',
  nvr_cfg: 'nvr_cfg',
  nvr_channel_cfg: 'nvr_channel_cfg',
  vehicle_info: 'vehicle_info',
  vehicle_list: 'vehicle_list',
  version_control: 'version_control'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
