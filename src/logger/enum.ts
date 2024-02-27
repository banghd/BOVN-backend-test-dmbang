export enum ACTOR_TYPE {
  USER = 'USER',
  ADMIN = 'ADMIN',
  AGENT = 'AGENT',
  MANAGER = 'MANAGER',
  MERCHANT = 'MERCHANT',
  RIDER = 'RIDER',
  OPERATOR = 'OPERATOR',
  TOOKAN = 'TOOKAN',
  SYSTEM = 'SYSTEM',
  VOUCHERIFY = 'VOUCHERIFY',
  PG = 'PG',
}

export enum ACTION_TYPE {
  REGISTER = 'REGISTER',
  LOGIN = 'LOGIN',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  RESTORE = 'RESTORE',
  BLOCK = 'BLOCK',
  UNBLOCK = 'UNBLOCK',
  BULK_CREATE = 'BULK_CREATE',
}

export enum TARGET_TYPE {
  USER = 'USER',
}
