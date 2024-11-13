// export const SERVER_API_URL = __SERVER_API_URL__;
// export const YANDEX_API_URL = __YANDEX_API_URL__;
// export const YANDEX_RESOURCES_URL = __YANDEX_RESOURCES_URL__;
// export const SERVER_HOST =
//   typeof window === 'undefined'
//     ? __INTERNAL_SERVER_URL__
//     : __EXTERNAL_SERVER_URL__;
// export const PUBLIC_VAPID_KEY = __PUBLIC_VAPID_KEY__;

export const SERVER_API_URL = 'http://localhost:3001';
export const YANDEX_API_URL = 'https://ya-praktikum.tech/api/v2';
export const YANDEX_RESOURCES_URL =
  'https://ya-praktikum.tech/api/v2/resources';
export const SERVER_HOST =
  typeof window === 'undefined'
    ? 'http://server:3000'
    : 'http://localhost:3000';
export const PUBLIC_VAPID_KEY = 'piU0W5nSUdjz5MxsJIdW2JlxqizQHMNV9NjLPExrzvI';
