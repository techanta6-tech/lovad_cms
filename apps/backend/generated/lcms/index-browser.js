
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

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  from_windows_ad: 'from_windows_ad',
  description: 'description',
  tag: 'tag',
  type: 'type',
  active: 'active',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified',
  email: 'email',
  alias: 'alias',
  lcms_setting_update_uid_for_acc: 'lcms_setting_update_uid_for_acc'
};

exports.Prisma.Account_otpScalarFieldEnum = {
  code: 'code',
  username: 'username',
  time_created: 'time_created',
  time_expired: 'time_expired'
};

exports.Prisma.Account_tokenScalarFieldEnum = {
  id: 'id',
  token: 'token',
  username: 'username',
  refresh_token_id: 'refresh_token_id',
  time_created: 'time_created',
  time_expired: 'time_expired'
};

exports.Prisma.Attendance_daily_summary_parentScalarFieldEnum = {
  id: 'id',
  object_id: 'object_id',
  schedule_profile_id: 'schedule_profile_id',
  attendance_date: 'attendance_date',
  total_scheduled_seconds: 'total_scheduled_seconds',
  total_present_seconds: 'total_present_seconds',
  total_absent_seconds: 'total_absent_seconds',
  total_temporary_missing_seconds: 'total_temporary_missing_seconds',
  total_slots: 'total_slots',
  present_slots: 'present_slots',
  absent_slots: 'absent_slots',
  late_slots: 'late_slots',
  early_leave_slots: 'early_leave_slots',
  attendance_percent: 'attendance_percent',
  time_modified: 'time_modified',
  partition_key: 'partition_key'
};

exports.Prisma.BranchesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  phone_number: 'phone_number',
  email: 'email',
  description: 'description',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Camera_area_event_sourceScalarFieldEnum = {
  area_id: 'area_id',
  event_catalogue_ids: 'event_catalogue_ids',
  vms_server_id: 'vms_server_id',
  camera_id: 'camera_id',
  area_name: 'area_name',
  area_desc: 'area_desc',
  camera_friendly_name: 'camera_friendly_name',
  status: 'status',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Client_event_cfgScalarFieldEnum = {
  client_device_id: 'client_device_id',
  client_acc_id: 'client_acc_id',
  cfg_data: 'cfg_data',
  last_time_active: 'last_time_active',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Customer_order_details_parentScalarFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  product_id: 'product_id',
  quantity: 'quantity',
  price: 'price',
  unit_price: 'unit_price',
  time_created: 'time_created',
  time_modified: 'time_modified',
  partition_key: 'partition_key'
};

exports.Prisma.Customer_orders_parentScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  branch_id: 'branch_id',
  order_date: 'order_date',
  time_modified: 'time_modified',
  note: 'note',
  partition_key: 'partition_key'
};

exports.Prisma.Device_tokenScalarFieldEnum = {
  device_id: 'device_id',
  last_acc_id_login: 'last_acc_id_login',
  last_time_login: 'last_time_login'
};

exports.Prisma.Evaluation_formScalarFieldEnum = {
  id: 'id',
  name: 'name',
  note: 'note',
  criteria_list_json_text: 'criteria_list_json_text',
  time_created: 'time_created',
  user_created: 'user_created'
};

exports.Prisma.Evaluation_response_formScalarFieldEnum = {
  id: 'id',
  evaluation_form_id: 'evaluation_form_id',
  note: 'note',
  criteria_list_json_text: 'criteria_list_json_text',
  time_created: 'time_created',
  user_created: 'user_created',
  user_target: 'user_target'
};

exports.Prisma.Event_catalogues_listScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  time_created: 'time_created',
  time_modified: 'time_modified',
  parent_id: 'parent_id'
};

exports.Prisma.Event_cfgScalarFieldEnum = {
  acc_id: 'acc_id',
  last_time_get_event: 'last_time_get_event',
  last_event_time_push_noti: 'last_event_time_push_noti'
};

exports.Prisma.Event_data_changesScalarFieldEnum = {
  id: 'id',
  event_uid: 'event_uid',
  event_time_created: 'event_time_created',
  table_type: 'table_type',
  update_type: 'update_type',
  vms_server_id: 'vms_server_id',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Event_device_status_parentScalarFieldEnum = {
  id: 'id',
  device_id: 'device_id',
  device_name: 'device_name',
  device_desc: 'device_desc',
  device_type: 'device_type',
  status: 'status',
  status_msg: 'status_msg',
  create_time: 'create_time',
  time_modified: 'time_modified',
  partition_key: 'partition_key'
};

exports.Prisma.Event_image_parentScalarFieldEnum = {
  id: 'id',
  type: 'type',
  statistic_id: 'statistic_id',
  channel_id: 'channel_id',
  camera_id: 'camera_id',
  image_path: 'image_path',
  sub_image_path: 'sub_image_path',
  create_time: 'create_time',
  time_modified: 'time_modified',
  last_image_path: 'last_image_path',
  sub_last_image_path: 'sub_last_image_path',
  last_image_time: 'last_image_time',
  object_bound_rects: 'object_bound_rects',
  partition_key: 'partition_key',
  encrypted_type: 'encrypted_type',
  preview_image_path: 'preview_image_path',
  sub_preview_image_path: 'sub_preview_image_path'
};

exports.Prisma.Event_map_info_parentScalarFieldEnum = {
  id: 'id',
  statistic_id: 'statistic_id',
  create_time: 'create_time',
  time_modified: 'time_modified',
  location_desc: 'location_desc',
  latitude: 'latitude',
  longitude: 'longitude',
  radius_of_view_metre: 'radius_of_view_metre',
  is_same_location_with_device: 'is_same_location_with_device',
  partition_key: 'partition_key'
};

exports.Prisma.Event_process_parentScalarFieldEnum = {
  id: 'id',
  event_id: 'event_id',
  create_time: 'create_time',
  time_modified: 'time_modified',
  user_process: 'user_process',
  confirm_type: 'confirm_type',
  title: 'title',
  content: 'content',
  partition_key: 'partition_key'
};

exports.Prisma.Event_related_report_parentScalarFieldEnum = {
  id: 'id',
  content: 'content',
  wuser_created: 'wuser_created',
  wuser_modified: 'wuser_modified',
  time_created: 'time_created',
  time_modified: 'time_modified',
  event_type: 'event_type',
  images: 'images',
  videos: 'videos',
  format_images: 'format_images',
  format_videos: 'format_videos',
  traffic_report_type: 'traffic_report_type',
  time_incident: 'time_incident',
  province_code: 'province_code',
  commune_code: 'commune_code',
  incident_location: 'incident_location',
  latitude: 'latitude',
  longitude: 'longitude',
  partition_key: 'partition_key'
};

exports.Prisma.Event_statistic_parentScalarFieldEnum = {
  id: 'id',
  vms_server_id: 'vms_server_id',
  source_id: 'source_id',
  source_type: 'source_type',
  source_sub_id: 'source_sub_id',
  camera_event_id: 'camera_event_id',
  object_key: 'object_key',
  object_id: 'object_id',
  object_tracking_id: 'object_tracking_id',
  behavior_key: 'behavior_key',
  user_defined_behavior_id: 'user_defined_behavior_id',
  object_speed: 'object_speed',
  limit_over_speed: 'limit_over_speed',
  limit_low_speed: 'limit_low_speed',
  detail: 'detail',
  create_time: 'create_time',
  time_modified: 'time_modified',
  is_valid: 'is_valid',
  is_deleted: 'is_deleted',
  partition_key: 'partition_key'
};

exports.Prisma.Event_taskScalarFieldEnum = {
  id: 'id',
  event_id: 'event_id',
  event_partition_key: 'event_partition_key',
  name: 'name',
  detail: 'detail',
  status: 'status',
  assigned_user: 'assigned_user',
  wuser_created: 'wuser_created',
  wuser_modified: 'wuser_modified',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Event_task_logScalarFieldEnum = {
  id: 'id',
  task_id: 'task_id',
  status: 'status',
  detail: 'detail',
  performed_by_user: 'performed_by_user',
  assigned_user: 'assigned_user',
  time_created: 'time_created'
};

exports.Prisma.Event_video_parentScalarFieldEnum = {
  id: 'id',
  type: 'type',
  statistic_id: 'statistic_id',
  channel_id: 'channel_id',
  camera_id: 'camera_id',
  time_start: 'time_start',
  time_end: 'time_end',
  time_modified: 'time_modified',
  clip_path: 'clip_path',
  sub_clip_path: 'sub_clip_path',
  is_backup: 'is_backup',
  partition_key: 'partition_key',
  encrypted_type: 'encrypted_type',
  preview_clip_path: 'preview_clip_path',
  sub_preview_clip_path: 'sub_preview_clip_path'
};

exports.Prisma.Event_vms_parentScalarFieldEnum = {
  id: 'id',
  vms_server_id: 'vms_server_id',
  event_id: 'event_id',
  source_id: 'source_id',
  source_type: 'source_type',
  event_source_id: 'event_source_id',
  warning_level: 'warning_level',
  create_time: 'create_time',
  time_modified: 'time_modified',
  status: 'status',
  ex_info: 'ex_info',
  is_valid: 'is_valid',
  is_deleted: 'is_deleted',
  partition_key: 'partition_key'
};

exports.Prisma.Global_error_sync_info_parentScalarFieldEnum = {
  statistic_id: 'statistic_id',
  created_time_download_info: 'created_time_download_info',
  vms_server_id: 'vms_server_id',
  global_error_string: 'global_error_string',
  created_time: 'created_time',
  modified_time: 'modified_time',
  server_name: 'server_name',
  dict_error: 'dict_error',
  tag_search: 'tag_search',
  partition_key: 'partition_key'
};

exports.Prisma.Hik_appointmentScalarFieldEnum = {
  id: 'id',
  status: 'status',
  receptionist_email: 'receptionist_email',
  person_name: 'person_name',
  org_name: 'org_name',
  appointment_request: 'appointment_request',
  faces: 'faces',
  identi_photos: 'identi_photos',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Human_infoScalarFieldEnum = {
  id: 'id',
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
  name: 'name',
  is_deleted: 'is_deleted',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Lcms_acc_extapp_permissionScalarFieldEnum = {
  id: 'id',
  acc_id: 'acc_id',
  type: 'type',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Lcms_acc_group_extapp_permissionScalarFieldEnum = {
  id: 'id',
  acc_group_id: 'acc_group_id',
  type: 'type',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Lcms_acc_group_object_permissionScalarFieldEnum = {
  id: 'id',
  acc_group_id: 'acc_group_id',
  type: 'type',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Lcms_acc_object_permissionScalarFieldEnum = {
  id: 'id',
  acc_id: 'acc_id',
  type: 'type',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Lcms_server_configurationScalarFieldEnum = {
  id: 'id',
  lcms_server_id: 'lcms_server_id',
  community_dvms_server_id: 'community_dvms_server_id',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Log_categoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Log_parentScalarFieldEnum = {
  id: 'id',
  id_event_log: 'id_event_log',
  detail: 'detail',
  type: 'type',
  level: 'level',
  app_type: 'app_type',
  time_created: 'time_created',
  service_id: 'service_id',
  account_id: 'account_id',
  category_id: 'category_id',
  partition_key: 'partition_key'
};

exports.Prisma.Lparking_acc_group_multi_target_managed_permissionScalarFieldEnum = {
  id: 'id',
  acc_group_id: 'acc_group_id',
  multi_target_managed_id: 'multi_target_managed_id',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Lparking_acc_group_server_permissionScalarFieldEnum = {
  id: 'id',
  acc_group_id: 'acc_group_id',
  server_id: 'server_id',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Lparking_acc_group_server_permission_timeScalarFieldEnum = {
  id: 'id',
  permission_id: 'permission_id',
  time_start_on_day: 'time_start_on_day',
  time_end_on_day: 'time_end_on_day',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Lparking_acc_multi_target_managed_permissionScalarFieldEnum = {
  id: 'id',
  vms_acc_id: 'vms_acc_id',
  multi_target_managed_id: 'multi_target_managed_id',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Lparking_acc_server_permissionScalarFieldEnum = {
  id: 'id',
  vms_acc_id: 'vms_acc_id',
  server_id: 'server_id',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Lparking_acc_server_permission_timeScalarFieldEnum = {
  id: 'id',
  permission_id: 'permission_id',
  time_start_on_day: 'time_start_on_day',
  time_end_on_day: 'time_end_on_day',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Lparking_multi_target_managedScalarFieldEnum = {
  id: 'id',
  target_id: 'target_id',
  type: 'type',
  name: 'name',
  description: 'description',
  server_id: 'server_id',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Lparking_serverScalarFieldEnum = {
  lcms_setting_update_uid: 'lcms_setting_update_uid',
  id: 'id',
  version: 'version',
  name: 'name',
  description: 'description',
  tag: 'tag',
  address: 'address',
  http_port: 'http_port',
  https_port: 'https_port',
  type: 'type',
  status: 'status',
  active: 'active',
  group_id: 'group_id',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Lparking_server_groupScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  tag: 'tag',
  type: 'type',
  status: 'status',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Moment_cam_locationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  images_price: 'images_price',
  videos_price: 'videos_price',
  combo_price: 'combo_price',
  print_203x305_price: 'print_203x305_price',
  time_created: 'time_created',
  time_modified: 'time_modified',
  moment_cam_zone_id: 'moment_cam_zone_id'
};

exports.Prisma.Moment_cam_logScalarFieldEnum = {
  id: 'id',
  detail: 'detail',
  order_id: 'order_id',
  complaint_code: 'complaint_code',
  type: 'type',
  time_created: 'time_created'
};

exports.Prisma.Moment_cam_moment_itemScalarFieldEnum = {
  id: 'id',
  moment_cam_order_id: 'moment_cam_order_id',
  moment_key: 'moment_key',
  moment_name: 'moment_name',
  vms_server_id: 'vms_server_id',
  package_type: 'package_type',
  amount: 'amount',
  media_data: 'media_data',
  start_time: 'start_time',
  end_time: 'end_time',
  time_created: 'time_created'
};

exports.Prisma.Moment_cam_orderScalarFieldEnum = {
  id: 'id',
  complaint_code: 'complaint_code',
  complaint_counter: 'complaint_counter',
  transfer_content: 'transfer_content',
  status: 'status',
  digital_amount: 'digital_amount',
  print_amount: 'print_amount',
  discount_amount: 'discount_amount',
  final_amount: 'final_amount',
  beneficiary_account_no: 'beneficiary_account_no',
  beneficiary_bank_name: 'beneficiary_bank_name',
  storage_root_path: 'storage_root_path',
  max_storage_days: 'max_storage_days',
  moment_cam_zone_id: 'moment_cam_zone_id',
  guest_email: 'guest_email',
  base_download_link: 'base_download_link',
  paid_at: 'paid_at',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Moment_cam_payment_transactionScalarFieldEnum = {
  id: 'id',
  moment_cam_order_id: 'moment_cam_order_id',
  provider_transaction_id: 'provider_transaction_id',
  gateway: 'gateway',
  account_number: 'account_number',
  transfer_amount: 'transfer_amount',
  transfer_type: 'transfer_type',
  transaction_date: 'transaction_date',
  reference_code: 'reference_code',
  content: 'content',
  description: 'description',
  webhook_payload: 'webhook_payload',
  time_created: 'time_created'
};

exports.Prisma.Moment_cam_print_itemScalarFieldEnum = {
  id: 'id',
  moment_cam_order_id: 'moment_cam_order_id',
  vms_server_id: 'vms_server_id',
  print_paper_size: 'print_paper_size',
  print_layout_type: 'print_layout_type',
  quantity: 'quantity',
  unit_price: 'unit_price',
  amount: 'amount',
  status: 'status',
  print_data: 'print_data',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Moment_cam_zoneScalarFieldEnum = {
  id: 'id',
  name: 'name',
  storage_root_path: 'storage_root_path',
  max_storage_days: 'max_storage_days',
  prefix_transfer_content: 'prefix_transfer_content',
  beneficiary_account_no: 'beneficiary_account_no',
  beneficiary_bank_name: 'beneficiary_bank_name',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Monitoring_slot_summary_parentScalarFieldEnum = {
  id: 'id',
  camera_id: 'camera_id',
  zone_id: 'zone_id',
  slot_id: 'slot_id',
  schedule_profile_id: 'schedule_profile_id',
  object_id: 'object_id',
  start_time: 'start_time',
  end_time: 'end_time',
  present_seconds: 'present_seconds',
  absent_seconds: 'absent_seconds',
  is_late: 'is_late',
  late_seconds: 'late_seconds',
  is_early_leave: 'is_early_leave',
  early_leave_seconds: 'early_leave_seconds',
  monitoring_delay_seconds: 'monitoring_delay_seconds',
  temporary_missing_seconds: 'temporary_missing_seconds',
  attendance_checkpoint_count: 'attendance_checkpoint_count',
  passed_attendance_checkpoint_count: 'passed_attendance_checkpoint_count',
  attendance_checkpoint_mask: 'attendance_checkpoint_mask',
  time_modified: 'time_modified',
  partition_key: 'partition_key'
};

exports.Prisma.Patrol_report_image_parentScalarFieldEnum = {
  id: 'id',
  patrol_report_id: 'patrol_report_id',
  image_path: 'image_path',
  sub_image_path: 'sub_image_path',
  time_created: 'time_created',
  time_modified: 'time_modified',
  format: 'format',
  partition_key: 'partition_key'
};

exports.Prisma.Patrol_report_parentScalarFieldEnum = {
  id: 'id',
  content: 'content',
  wuser_created: 'wuser_created',
  wuser_modified: 'wuser_modified',
  time_created: 'time_created',
  time_modified: 'time_modified',
  type: 'type',
  event_time: 'event_time',
  event_location: 'event_location',
  latitude: 'latitude',
  longitude: 'longitude',
  altitude: 'altitude',
  partition_key: 'partition_key'
};

exports.Prisma.Patrol_report_video_parentScalarFieldEnum = {
  id: 'id',
  patrol_report_id: 'patrol_report_id',
  clip_path: 'clip_path',
  sub_clip_path: 'sub_clip_path',
  time_created: 'time_created',
  time_modified: 'time_modified',
  format: 'format',
  partition_key: 'partition_key'
};

exports.Prisma.Patrol_root_locationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  latitude: 'latitude',
  longitude: 'longitude',
  altitude: 'altitude',
  radius: 'radius',
  is_active: 'is_active',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Patrol_visitorScalarFieldEnum = {
  leader_id: 'leader_id',
  card_id: 'card_id',
  full_name: 'full_name',
  company: 'company',
  purpose: 'purpose',
  note: 'note',
  contact_person: 'contact_person',
  status: 'status',
  members_json_text: 'members_json_text',
  address: 'address',
  date_of_issue: 'date_of_issue',
  date_of_birth: 'date_of_birth',
  sex: 'sex',
  time_in: 'time_in',
  time_out: 'time_out',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Refresh_tokenScalarFieldEnum = {
  id: 'id',
  token: 'token',
  username: 'username',
  type: 'type',
  time_created: 'time_created',
  time_modified: 'time_modified',
  time_expired: 'time_expired',
  is_deleted: 'is_deleted'
};

exports.Prisma.Sale_product_listScalarFieldEnum = {
  id: 'id',
  name: 'name',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Sale_productsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  price: 'price',
  unit_price: 'unit_price',
  list_img: 'list_img',
  list_ids: 'list_ids',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Script_event_sourceScalarFieldEnum = {
  script_id: 'script_id',
  event_catalogue_ids: 'event_catalogue_ids',
  vms_server_id: 'vms_server_id',
  script_name: 'script_name',
  script_desc: 'script_desc',
  status: 'status',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Synchronized_data_ledgerScalarFieldEnum = {
  id: 'id',
  object_id: 'object_id',
  table_type: 'table_type',
  dvms_server_id: 'dvms_server_id',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.User_configurationScalarFieldEnum = {
  cfg_type: 'cfg_type',
  username: 'username',
  content: 'content',
  version: 'version',
  app_type: 'app_type',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.User_defined_behaviorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  cfg_data: 'cfg_data',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Vehicle_infoScalarFieldEnum = {
  id: 'id',
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

exports.Prisma.Visitor_imageScalarFieldEnum = {
  id: 'id',
  visitor_id: 'visitor_id',
  image_path: 'image_path',
  sub_image_path: 'sub_image_path',
  format: 'format',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Visitor_videoScalarFieldEnum = {
  id: 'id',
  visitor_id: 'visitor_id',
  clip_path: 'clip_path',
  sub_clip_path: 'sub_clip_path',
  format: 'format',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_acc_channel_permissionScalarFieldEnum = {
  id: 'id',
  vms_acc_id: 'vms_acc_id',
  channel_id: 'channel_id',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_acc_channel_permission_timeScalarFieldEnum = {
  id: 'id',
  permission_id: 'permission_id',
  time_start_on_day: 'time_start_on_day',
  time_end_on_day: 'time_end_on_day',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_acc_groupScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  tag: 'tag',
  type: 'type',
  active: 'active',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_acc_group_channel_permissionScalarFieldEnum = {
  id: 'id',
  acc_group_id: 'acc_group_id',
  channel_id: 'channel_id',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_acc_group_channel_permission_timeScalarFieldEnum = {
  id: 'id',
  permission_id: 'permission_id',
  time_start_on_day: 'time_start_on_day',
  time_end_on_day: 'time_end_on_day',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_acc_group_multi_target_managed_permissionScalarFieldEnum = {
  id: 'id',
  acc_group_id: 'acc_group_id',
  multi_target_managed_id: 'multi_target_managed_id',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_acc_group_relationshipScalarFieldEnum = {
  group_id: 'group_id',
  vms_acc_id: 'vms_acc_id',
  wuser_created: 'wuser_created',
  time_created: 'time_created'
};

exports.Prisma.Vms_acc_group_server_permissionScalarFieldEnum = {
  id: 'id',
  acc_group_id: 'acc_group_id',
  server_id: 'server_id',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_acc_group_server_permission_timeScalarFieldEnum = {
  id: 'id',
  permission_id: 'permission_id',
  time_start_on_day: 'time_start_on_day',
  time_end_on_day: 'time_end_on_day',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_acc_multi_target_managed_permissionScalarFieldEnum = {
  id: 'id',
  vms_acc_id: 'vms_acc_id',
  multi_target_managed_id: 'multi_target_managed_id',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_acc_server_permissionScalarFieldEnum = {
  id: 'id',
  vms_acc_id: 'vms_acc_id',
  server_id: 'server_id',
  permission: 'permission',
  time_expired: 'time_expired',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_acc_server_permission_timeScalarFieldEnum = {
  id: 'id',
  permission_id: 'permission_id',
  time_start_on_day: 'time_start_on_day',
  time_end_on_day: 'time_end_on_day',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_channelScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  camera_mapping_id: 'camera_mapping_id',
  owner_id: 'owner_id',
  user_owner_id: 'user_owner_id',
  owner_name: 'owner_name',
  tag: 'tag',
  server_id: 'server_id',
  type: 'type',
  status: 'status',
  active: 'active',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_multi_target_managedScalarFieldEnum = {
  id: 'id',
  target_id: 'target_id',
  type: 'type',
  name: 'name',
  description: 'description',
  server_id: 'server_id',
  time_created: 'time_created',
  time_modified: 'time_modified'
};

exports.Prisma.Vms_serverScalarFieldEnum = {
  lcms_setting_update_uid: 'lcms_setting_update_uid',
  id: 'id',
  version: 'version',
  name: 'name',
  description: 'description',
  tag: 'tag',
  address: 'address',
  server_port: 'server_port',
  http_port: 'http_port',
  https_port: 'https_port',
  rtsp_port: 'rtsp_port',
  websocket_port: 'websocket_port',
  hls_port: 'hls_port',
  type: 'type',
  status: 'status',
  active: 'active',
  group_id: 'group_id',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified',
  local_address: 'local_address',
  local_server_port: 'local_server_port',
  local_http_port: 'local_http_port',
  local_https_port: 'local_https_port',
  local_rtsp_port: 'local_rtsp_port',
  local_websocket_port: 'local_websocket_port',
  local_hls_port: 'local_hls_port'
};

exports.Prisma.Vms_server_groupScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  tag: 'tag',
  type: 'type',
  status: 'status',
  wuser_created: 'wuser_created',
  time_created: 'time_created',
  wuser_modified: 'wuser_modified',
  time_modified: 'time_modified'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  account: 'account',
  account_otp: 'account_otp',
  account_token: 'account_token',
  attendance_daily_summary_parent: 'attendance_daily_summary_parent',
  branches: 'branches',
  camera_area_event_source: 'camera_area_event_source',
  client_event_cfg: 'client_event_cfg',
  customer_order_details_parent: 'customer_order_details_parent',
  customer_orders_parent: 'customer_orders_parent',
  device_token: 'device_token',
  evaluation_form: 'evaluation_form',
  evaluation_response_form: 'evaluation_response_form',
  event_catalogues_list: 'event_catalogues_list',
  event_cfg: 'event_cfg',
  event_data_changes: 'event_data_changes',
  event_device_status_parent: 'event_device_status_parent',
  event_image_parent: 'event_image_parent',
  event_map_info_parent: 'event_map_info_parent',
  event_process_parent: 'event_process_parent',
  event_related_report_parent: 'event_related_report_parent',
  event_statistic_parent: 'event_statistic_parent',
  event_task: 'event_task',
  event_task_log: 'event_task_log',
  event_video_parent: 'event_video_parent',
  event_vms_parent: 'event_vms_parent',
  global_error_sync_info_parent: 'global_error_sync_info_parent',
  hik_appointment: 'hik_appointment',
  human_info: 'human_info',
  human_list: 'human_list',
  lcms_acc_extapp_permission: 'lcms_acc_extapp_permission',
  lcms_acc_group_extapp_permission: 'lcms_acc_group_extapp_permission',
  lcms_acc_group_object_permission: 'lcms_acc_group_object_permission',
  lcms_acc_object_permission: 'lcms_acc_object_permission',
  lcms_server_configuration: 'lcms_server_configuration',
  log_category: 'log_category',
  log_parent: 'log_parent',
  lparking_acc_group_multi_target_managed_permission: 'lparking_acc_group_multi_target_managed_permission',
  lparking_acc_group_server_permission: 'lparking_acc_group_server_permission',
  lparking_acc_group_server_permission_time: 'lparking_acc_group_server_permission_time',
  lparking_acc_multi_target_managed_permission: 'lparking_acc_multi_target_managed_permission',
  lparking_acc_server_permission: 'lparking_acc_server_permission',
  lparking_acc_server_permission_time: 'lparking_acc_server_permission_time',
  lparking_multi_target_managed: 'lparking_multi_target_managed',
  lparking_server: 'lparking_server',
  lparking_server_group: 'lparking_server_group',
  moment_cam_location: 'moment_cam_location',
  moment_cam_log: 'moment_cam_log',
  moment_cam_moment_item: 'moment_cam_moment_item',
  moment_cam_order: 'moment_cam_order',
  moment_cam_payment_transaction: 'moment_cam_payment_transaction',
  moment_cam_print_item: 'moment_cam_print_item',
  moment_cam_zone: 'moment_cam_zone',
  monitoring_slot_summary_parent: 'monitoring_slot_summary_parent',
  patrol_report_image_parent: 'patrol_report_image_parent',
  patrol_report_parent: 'patrol_report_parent',
  patrol_report_video_parent: 'patrol_report_video_parent',
  patrol_root_location: 'patrol_root_location',
  patrol_visitor: 'patrol_visitor',
  refresh_token: 'refresh_token',
  sale_product_list: 'sale_product_list',
  sale_products: 'sale_products',
  script_event_source: 'script_event_source',
  synchronized_data_ledger: 'synchronized_data_ledger',
  user_configuration: 'user_configuration',
  user_defined_behavior: 'user_defined_behavior',
  vehicle_info: 'vehicle_info',
  vehicle_list: 'vehicle_list',
  version_control: 'version_control',
  visitor_image: 'visitor_image',
  visitor_video: 'visitor_video',
  vms_acc_channel_permission: 'vms_acc_channel_permission',
  vms_acc_channel_permission_time: 'vms_acc_channel_permission_time',
  vms_acc_group: 'vms_acc_group',
  vms_acc_group_channel_permission: 'vms_acc_group_channel_permission',
  vms_acc_group_channel_permission_time: 'vms_acc_group_channel_permission_time',
  vms_acc_group_multi_target_managed_permission: 'vms_acc_group_multi_target_managed_permission',
  vms_acc_group_relationship: 'vms_acc_group_relationship',
  vms_acc_group_server_permission: 'vms_acc_group_server_permission',
  vms_acc_group_server_permission_time: 'vms_acc_group_server_permission_time',
  vms_acc_multi_target_managed_permission: 'vms_acc_multi_target_managed_permission',
  vms_acc_server_permission: 'vms_acc_server_permission',
  vms_acc_server_permission_time: 'vms_acc_server_permission_time',
  vms_channel: 'vms_channel',
  vms_multi_target_managed: 'vms_multi_target_managed',
  vms_server: 'vms_server',
  vms_server_group: 'vms_server_group'
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
