/**
Author: Hashika
Date: 29/01/2021
Copyright © 2021 CellcardPlay. All rights reserved.
*/

module.exports = {
    USER_ACTIVATE: true,
  
    TABLES:{
      APPLICATION_AUDIT:'ApplicationAudit',
      PERSON: "persons"
    },

    ADAPTERS: {
      CELLCARD_SMS: 'CellcardSms',
      CELLCARD_TOM: 'CellcardTom',
      CELLCARD_PROFILE: 'CellcardProfile',
      CELLCARD_SUBSCRIBE: 'CellcardSubscribe',
      CELLCARD_SEND_GIFT: 'CellcardSendGift',
      CELLCARD_UNSUBSCRIBE: 'CellcardUnsubscribe',
      PLASGATE_SMS: 'PlasgateSms',
      VOUCHER_VOUCHERY: 'Vouchery',
      MOENGAGE_EVENT: 'MoengageEvent',
      GOOGLE_ANALYTICS_EVENT: 'GoogleAnalyticsEvent',
      MOENGAGE_PUSH: 'MoengagePush',
      MOENGAGE_USER: 'MoengageUser',
      PLAY_POINT_AUTHORIZE: 'PlayPointAuthorize',
      PLAY_POINT_SYNC_POINT: 'PlayPointSyncPoint',
      PLAY_POINT_ADD_USER: 'PlayPointAddUser',
      PLAY_POINT_RESET_USER: 'playPointRestUser',
      PLAY_POINT_SUSPEND_USER: 'playPointSuspendUser',
      PLAY_POINT_ADD_POINTS: 'playPointAddPoints',
      PLAY_POINT_BURN_POINTS: 'playPointBurnPoints',
      PLAY_POINT_GET_PROMO_CODE: 'playPointGetPromoCode',
      PLAY_POINT_VERIFY_PROMO_CODE: 'playPointVerifyPromoCode',
      PLAY_POINT_REDEEM_POINT: 'playPointRedeemPoint',
      PLAY_POINT_REDEEM_REFERRAL: 'playPointRedeemReferral',
      PLAY_POINT_VERIFY_REFERRAL_CODE: 'playPointVerifyReferralCode',
      PLAY_POINT_CHECK_TRANSACTION: 'playPointCheckTransaction',
      PLAY_CODE_DISTRIBUTOR_REQUEST_CODE: 'playCodeDistributorRequestCode',
      PLAY_CODE_GET_TRANSACTION_DETAILS: 'playCodeGetTransactionDetails',
      PLAY_CODE_DISTRIBUTOR_REQUEST_DECRYPTED_CODE:
        'playCodeDistributorRequestDecryptedCode'
    },
  
    MIME_TYPES: {
      APPLICATION_JSON: 'application/json',
      APPLICATION_XML: 'application/xml',
      TEXT_PLAIN: 'text/plain',
      TEXT_HTML: 'text/html'
    },
  
    HTTP_HEADER_VALUES: {
      NO_CACHE: 'no-cache'
    },
  
    HTTP_HEADERS: {
      ACCEPT: 'accept',
      AUTHORIZATION: 'authorization',
      ACCESS_CONTROL_ALLOW_ORIGIN: 'access-control-allow-origin',
      CONTENT_TYPE: 'content-type',
      LOCATION: 'location',
      CACHE_CONTROL: 'Cache-Control'
    },
  
    CUSTOM_HEADERS: {
      X_SOURCE: 'x-source',
      X_DEVICE: 'x-device',
      X_BROWSER: 'x-browser',
      X_CELLCARD_REQUEST_ID: 'X-Cellcard-Request-ID',
      MOE_APPKEY: 'MOE-APPKEY',
      HEADER_KEY: 'Header-key'
    },
  
    CUSTOM_HEADERS_ACCEPTED_VALUES: {
      X_SOURCE: 'GPWeb'
    },
  
    HTTP_METHODS: {
      POST: 'POST',
      GET: 'GET',
      DELETE: 'DELETE',
      PUT: 'PUT'
    },
  
    HTTP_STATUS_CODE: {
      OK: 200,
      NO_CONTENT: 204,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      INTERNAL_SERVER_ERROR: 500,
      REDIRECT: 301
    },
  
    GENERIC_RESPONSE_MESSAGES: {
      SUCCESS: 'Success',
      NO_CONTENT: 'No Content',
      BAD_REQUEST: 'Bad Request',
      UNAUTHORIZED: 'Unauthorised',
      FORBIDDEN: 'Forbidden',
      INTERNAL_SERVER_ERROR: 'Internal server error',
      NOT_FOUND: 'Not found',
      VALIDATION_ERROR: 'Validation failed'
    },
  
    CUSTOM_ERROR_CODES: {
      VALIDATION_ERROR: '100',
      INVALID_MSISDN: '101',
      COGNITO_AUTH_ERROR: '102',
      INVALID_SESSION: '103',
      INSUFFICIENT_VOUCHER_INVENTORY: '104',
      INVALID_REFERRAL_CODE: '105',
      EXPIRED_PROMO_CODE: '106',
      INVALID_PROMO_CODE: '107',
      USED_PROMO_CODE: '108',
      REFERRAL_ALREADY_SUBSCRIBE_PLAN: '109',
      ALREADY_EXIST: '110',
      TIMEOUT: '111',
      PROMO_CODE_NOT_FOUND: '112',
      SERVICE_TRANSACTION_NOT_FOUND: '113',
      PROMO_CODE_MAXIMUM_USAGE_REACHED: '114',
      REACHED_MAXIMUM_USAGE_OF_PROMO_CODE: '115',
      PROMO_CODE_ALREADY_EXPIRED: '116'
    },
  
    VERIFICATION_MESSAGE: 'Your verification code is : ',
  
    PUSH_SMS_API_ERROR: 'An error occurred during Cellcard Push SMS API call',
    TOM_API_ERROR: 'An error occurred during TOM API call',
    PLASGATE_API_ERROR: 'An error occurred during Plasgate API call',
    MOENGAGE_API_ERROR: 'An error occurred during Moengage API call',
    GOOGLE_ANALYTICS_API_ERROR:
      'An error occurred during Google Analytics API call',
    SUBSCRIBE_API_ERROR: 'An error occurred during Cellcard Subscribe API call',
    SEND_GIFT_API_ERROR: 'An error occurred during Cellcard Send Gift API call',
    UNSUBSCRIBE_API_ERROR:
      'An error occurred during Cellcard Unsubscribe API call',
  
    LANGUAGES: {
      EN: 'en',
      KM: 'km',
      ZH: 'zh'
    },
  
    COGNITO_CODE_EXTRACTION_REGEX: /CODE-(\d*)/,
  
    COGNITO_CODE_PREFIX: 'CODE-',
  
    SMS_ORIGINATOR: 'PLAY',
  
    AUTH: {
      BEARER: 'Bearer',
      BASIC: 'Basic',
      CUSTOM_AUTH: 'CUSTOM_AUTH',
      REFRESH_TOKEN_AUTH: 'REFRESH_TOKEN_AUTH',
      CUSTOM_CHALLENGE: 'CUSTOM_CHALLENGE'
    },
  
    DEFAULT_METHOD: 'DEFAULT',
  
    USER_TYPES: {
      ANONYMOUS: 'ANONYMOUS',
      CELLCARD: 'CELLCARD',
      CELLCARD_ELIGIBLE: 'CELLCARD_ELIGIBLE',
      CELLCARD_NON_ELIGIBLE: 'CELLCARD_NON_ELIGIBLE',
      NON_CELLCARD: 'NON_CELLCARD'
    },
  
    COGNITO_USERNAME: 'cognito:username',
  
    FEATURES: {
      VIEW_PROFILE: 'view_profile',
      UPDATE_PROFILE: 'update_profile',
      VIEW_MEMBERSHIP_DETAILS: 'view_membership_details',
      VIEW_GAMING_LANDING_PAGE: 'view_gaming_landing_page',
      PAY_VIA_DIGITAL_PAYMENT: 'pay_via_digital_payment',
      VIEW_STORE_SUMMARY: 'view_store_summary',
      VIEW_EXCLUSIVE_OFFERS: 'view_exclusive_offers',
      VIEW_PURCHASED_VOUCHER_DETAILS: 'view_purchased_voucher_details',
      VIEW_PLAY_POINT_DETAILS: 'view_play_point_details',
      STOP_RENEWAL_OF_PLAY_MEMBERSHIP: 'stop_renewal_of_play_membership',
      VIEW_MAIN_BALANCE_DETAILS: 'view_main_balance_details',
      PAY_VIA_MAIN_BALANCE: 'pay_with_main_balance',
      VIEW_IN_APP_NOTIFICATIONS: 'view_in_app_notifications',
      SUBSCRIBE_TO_PLAY_MEMBERSHIP_FOR_OTHERS:
        'subscribe_to_play_membership_for_others',
      SUBSCRIBE_TO_PLAY_MEMBERSHIP_FOR_SELF:
        'subscribe_to_play_membership_for_self'
    },
  
    AUDIT_TYPES: {
      EXTERNAL: 'EXT',
      INTERNAL: 'INT'
    },
  
    PERF_LOGS_SYSTEMS: {
      CELLCARD_APIM: 'Cellcard API Manager',
      VOUCHERY: 'Vouchery',
      ABA: 'ABA Payment Gateway'
    },
  
    PAYMENT_GATEWAY_TYPE: {
      IPAY88: 'IPAY88',
      ABA: 'ABAPAY',
      CELLCARD: 'CELLCARD'
    },
  
    PAYMENT_TRANSACTION_TYPE: {
      IPAY88_WING: 'IPAY88_WING',
      IPAY88_CREORDEB: 'IPAY88_CREORDEB',
      IPAY88_ACLEDABANK: 'IPAY88_ACLEDABANK',
      IPAY88_UNIONPAY: 'IPAY88_UNIONPAY',
      IPAY88_ALIPAY: 'IPAY88_ALIPAY',
      ABA_PAY: 'ABA_PAY',
      ABA_CARD: 'ABA_CARD',
      CELLCARD_BALANCE: 'CELLCARD_BALANCE'
    },
  
    ORDER_TRANSACTION_STEPS: {
      TRANSACTION_INITIATE: 'TRANSACTION_INITIATE',
      WORKER_RECEIVED: 'WORKER_RECEIVED',
      WORKER_COMPLETED: 'WORKER_COMPLETED',
      TRANSACTION_RECEIVED: 'TRANSACTION_RECEIVED',
      WORKFLOW_COMPLETED: 'WORKFLOW_COMPLETED',
      TOP_UP_COMPLETED: 'TOP_UP_COMPLETED',
      MEMBERSHIP_PLAN_CREATED: 'MEMBERSHIP_PLAN_CREATED'
    },
  
    AUDIT_ACTION: {
      POST: 'POST',
      DELETE: 'DELETE',
      PUT: 'PUT'
    },
  
    REGEX_PATTERNS: {
      FIFTEEN_CHAR_UUID: '[0-9a-zA-Z]{15}'
    },
  
    SPECIAL_CHARACTERS: {
      S3_DELIMITER: '/',
      DASH: '-',
      DOT: '.'
    },
  
    PRODUCT_CATALOG_ETL_S3_PATHS: {
      TODO_FOLDER: 'telco-product-catalog/todo/',
      SUCCESS_FOLDER: 'telco-product-catalog/successfully-processed/',
      INVALID: 'telco-product-catalog/invalid-files/'
    },
  
    PRODUCT_CATALOG_ETL_S3_DUMMY_FILE_NAME: 'readme.txt',
  
    NOTIFICATION_RECEIVER: {
      ETL_DEV_OPS: 'DEV_OPS',
      FAILURE_NOTIFY_DEVOPS: 'FAILURE_NOTIFY_DEVOPS'
    },
  
    CATALOG_ETL_BOOLEAN_INPUT_ACCEPTABLE_VALUES: ['yes', 'no'],
  
    CATALOG_ETL_VALIDATION_CONSTANTS: {
      YES: 'YES',
      NA: 'N/A',
      EMPTY: ''
    },
  
    PLAN_TYPES: {
      PREPAID: 'PREPAID',
      HYBRID: 'HYBRID',
      POSTPAID: 'POSTPAID'
    },
  
    TARIFF_PLANS: {
      REGULAR_PLUS: 'REGULARPLUS',
      NIYEAY: 'NIYEAY',
      CELLCARD_4U: 'CELLCARD4U',
      TOURIST: 'TOURIST',
      CHINESE: 'CHINESE',
      DATA_SIM: 'DATASIM',
      CORPORATE: 'CORPORATE',
      INDIVIDUAL: 'INDIVIDUAL'
    },
  
    DATE_FORMATS: {
      DEFAULT: 'YYYY-MM-DD',
      DD_MM_YYYY: 'DD MM YYYY',
      DD_MMM_YYYY: 'DD MM YYYY',
      DD_MMM_YY: 'DD MMM YY',
      DD_MMM_YY_HH_MM_24: 'DD MMM YY | HH:mm',
      DD_MMM_YYYY_WITH_DASH: 'DD-MMM-YYYY',
      DDMMYYYYHHmm: 'DDMMYYYYHHmm',
      YYYYMMDDHHmmss: 'YYYYMMDDHHmmss',
      DDMMYYYYHH: 'DDMMYYYYHH',
      DD_MM_YY_BY_SLASH: 'DD/MM/YY',
      DD_MM_YYYY_hh_mm: 'DD/MM/YYYY hh:mm',
      MMMM_YYYY: 'MMMM YYYY',
      YEAR_MONTH_KEY: 'YYYYMM',
      MONTH_YEAR: 'MMM-YYYY',
      DEFAULT_DATETIME: 'YYYY-MM-DD HH:mm:ss',
      DATETIME: 'YYYY-MM-DD HH:mm:ss',
      MONTHS: 'months',
      MONTH: 'month'
    },
  
    ENCRYPTION_ALGORITHM: {
      SHA1: 'sha1',
      SHA256: 'sha256',
      SHA512: 'sha512',
      AES_256_ECB: 'aes-256-ecb'
    },
  
    ENCODING_ALGORITHM: {
      HEX: 'hex',
      BASE64: 'base64',
      UTF8: 'utf-8'
    },
  
    PLAY_POINT_ACTION: {
      SUSPEND: 'Suspend',
      UNSUSPEND: 'UnSuspend'
    },
  
    ORDER_BY: {
      ASC: 'ASC',
      DESC: 'DESC'
    },
  
    STRING: {
      NULL: 'null',
      EMPTY: ''
    },
  
    DEFAULT_PLAY_USER_NAME: 'No Name',
    DEFAULT_PLAY_EMAIL: 'cellcardncasystem@cellcard.com.kh',
    DEFAULT_TRANSACTION_CHANNEL: 'PLAY_UNLIMITED',
  
    PURCHASE_PRODUCT_TYPE: {
      PLAY_POINT: 'PLAYPOINT',
      MEMBERSHIP_PLAN: 'PLAN',
      TOP_UP: 'TOP_UP',
      PRODUCT: 'PRODUCT',
      PRODUCT_REVERSE: 'PRODUCT_REVERSE',
      REFERRER_BONUS: 'REFERRER_BONUS', // TODO: Gayan, change this object.
      REFEREE_BONUS: 'REFEREE_BONUS',
      PROMO_BONUS: 'PROMO_BONUS',
      GIFT: 'GIFT'
    },
  
    POINT_PROVIDER: {
      CELLCARD: 'Cellcard'
    },
  
    POINT_TRANSACTION_TYPE: {
      EARN: 'EARN',
      BURN: 'BURN'
    },
  
    POINT_TRANSACTION_STATUS: {
      CREATED: 'CREATED',
      SUCCESS: 'SUCCESS',
      FAILED: 'FAILED'
    },
  
    GIFT_TRANSACTION_STATUS: {
      CREATED: 'CREATED',
      SUCCESS: 'SUCCESS',
      FAILED: 'FAILED'
    },
  
    VOUCHER_TRANSACTION_STATUS: {
      CREATED: 'CREATED',
      SUCCESS: 'SUCCESS',
      FAILED: 'FAILED'
    },
  
    PRODUCT_TRANSACTION_STATUS: {
      CREATED: 'CREATED',
      SUCCESS: 'SUCCESS',
      FAILED: 'FAILED',
      IN_PROGRESS: 'IN_PROGRESS'
    },
  
    ORDER_TRANSACTION_STATUS: {
      CREATED: 'CREATED',
      SUCCESS: 'SUCCESS',
      FAILED: 'FAILED',
      IN_PROGRESS: 'IN_PROGRESS'
    },
  
    TRANSACTION_STATUS: {
      SUCCESS: 'SUCCESS',
      PENDING: 'PENDING',
      FAILED: 'FAILED'
    },
  
    BONUS_TRANSACTION_STATUS: {
      CREATED: 'CREATED',
      VALIDATED: 'VALIDATED',
      SUCCESS: 'SUCCESS',
      FAILED: 'FAILED'
    },
  
    APP_SETTING_KEYS: {
      MAINTENANCE_MODE: 'MAINTENANCE_MODE'
    },
  
    VOUCHER_STATUS: {
      ACTIVE: 'ACTIVE',
      USED: 'USED',
      EXPIRED: 'EXPIRED'
    },
  
    PLAN_STATUS: {
      ACTIVE: 'ACTIVE',
      PENDING_RENEWAL: 'PENDING_RENEWAL'
    },
  
    DATA_PLAN_FREQUENCIES: {
      WEEKLY: 'WEEKLY',
      MONTHLY: 'MONTHLY',
      NONE: 'NONE'
    },
  
    CELLCARD_ACCOUNT_STATUS: {
      VALID: 'VALID',
      ACTIVE: 'ACTIVE',
      GRACE: 'GRACE',
      GRACE1: 'GRACE1',
      GRACE2: 'GRACE2'
    },
  
    PLAY_ACCOUNT_STATUS: {
      ACTIVE: 'ACTIVE',
      INACTIVE: 'INACTIVE',
      TO_BE_DELETED: 'TO_BE_DELETED',
      INVALID: 'INVALID'
    },
  
    PLAY_ACCOUNT_PURCHASE_STATUS: {
      SUFFICIENT: 'SUFFICIENT',
      INACTIVE: 'INACTIVE',
      TO_BE_DELETED: 'TO_BE_DELETED',
      INSUFFICIENT: 'INSUFFICIENT'
    },
  
    TOP_UP_MANAGER: {
      BASE_URI: '/tom/v2/',
      BALANCE_TRANSFER: 'balance_transfer'
    },
  
    PRODUCT_PURCHASE_STATUS: {
      SUFFICIENT: 'SUFFICIENT',
      LIMIT_REACHED: 'LIMIT_REACHED',
      INSUFFICIENT: 'INSUFFICIENT',
      INELIGIBLE: 'INELIGIBLE',
      SOLD_OUT: 'SOLD_OUT'
    },
  
    REFERRAL_STATUS: {
      ALREADY_SUBSCRIBED_TO_PLAN: 'ALREADY_SUBSCRIBED_TO_PLAN',
      EXPIRED: 'EXPIRED',
      REUSED_CODE: 'REUSED_CODE',
      SUCCESS: 'SUCCESS',
      INVALID_REFERRAL_CODE: 'INVALID_CODE'
    },
  
    REFERRAL_VALIDATION_STATUS: {
      VALID: 'VALID_CODE',
      INVALID: 'INVALID_CODE'
    },
  
    PLAY_PROMO_CODE_TYPE: {
      REFERRAL: 'REFERRAL',
      PROMO_CODE: 'PROMO_CODE',
      GIFT_CODE: 'GIFT_CODE'
    },
  
    PRODUCT_PROVIDERS: {
      FOREST: 'FOREST',
      VOUCHERY: 'VOUCHERY',
      CELLCARD: 'CELLCARD'
    },
  
    PLAY_POINT_HISTORY_ACTIVITIES: {
      PLAY_POINTS_HISTORY_REWARDS: {
        en: offerName => `Earned from ${offerName}`,
        km: offerName => `ទទួលបានពី ${offerName}`,
        zh: offerName => `从${offerName}获得`
      },
      PLAY_POINTS_HISTORY_BOUGHT_POINTS: {
        en: offerName => `Bought ${offerName}`,
        km: offerName => `ទិញ ${offerName}`,
        zh: offerName => `购买了 ${offerName}`
      },
      PLAY_POINTS_HISTORY_PURCHASED_PRODUCTS: {
        en: offerName => `Bought ${offerName}`,
        km: offerName => `ទិញ ${offerName}`,
        zh: offerName => `购买了 ${offerName}`
      },
      PLAY_POINTS_HISTORY_RECEIVED: {
        en: (offerName, from) => `Received ${offerName} from ${from}`,
        km: (offerName, from) => `បានទទួល ${offerName} ពីលេខទូរស័ព្ទ  ${from} `,
        zh: (offerName, from) => `从${from}收到了${offerName}`
      },
      PLAY_POINTS_HISTORY_GIFTED: {
        en: (offerName, to) => `Bought ${offerName} for ${to}`,
        km: (offerName, to) => `ទិញ ${offerName} ជូនលេខទូរស័ព្ទ ${to}`,
        zh: (offerName, to) => `为${to}购买了${offerName}`
      }
    },
  
    PLAY_POINT_HISTORY_OTHER_DENOMINATORS: {
      PLAY_POINTS_REFERRAL_BONUS: {
        en: `Referral Bonus`,
        km: `កាដូសម្រាប់ការណែនាំ`,
        zh: `推荐奖金`
      },
      PLAY_POINTS_PLAY_COIN_REDEMPTION: {
        en: `Play Coins Redemption`,
        km: `បានបញ្ចូលលេខកូដ Play Coins`,
        zh: `兑换Play Coins`
      }
    },
  
    REPORT_FORMAT: {
      TIMEZONE: 'Asia/Phnom_Penh',
      TIME_FORMAT: {
        DATE: 'DD/MM/YYYY',
        TIME: 'HH:mm:ss',
        DATE_TIME: 'YYYY-MM-DD HH:mm:ss'
      },
      FILE_DATE_FORMAT: 'YYYY-MM-DD'
    },
  
    REPORT_TYPES: {
      POINT_PURCHASE: 'Play Coins Purchase',
      POINT_BURN: 'Play Coins Burn',
      USER_INFORMATION: 'User Information'
    },
  
    REPORT_HEADER_FIELDS: {
      PURCHASE: {
        ID: '#',
        DATE: 'date',
        TIME: 'time',
        SERVICETRANS_ID: 'servicetransId',
        GATEWAY_TRANSACTION_ID: 'Gateway Transaction ID',
        RECEIVER_MSISDN: 'Receiver MSISDN',
        RECEIVER_TELCO_PROVIDER: 'Receiver Telco Provider',
        USER_MSISDN: 'userMSISDN',
        USER_TELCO_PROVIDER: 'userTelcoProvider',
        ACTIVITY_ID: 'activityId',
        PURCHASED_COINS: 'purchasedCoins',
        BONUS_PERCENTAGE: '% of Bonus',
        BONUS_COINS: 'bonusCoins',
        TOTAL_COINS_RECEIVED: 'totalCoinsReceived',
        AMOUNT: 'Payment Amount ($)',
        PAYMENT_METHOD: 'Payment Method',
        PAYMENT_GATEWAY: 'Payment Gateway',
        PAYMENT_CHANNEL: 'Payment Channel',
        PAYMENT_METHOD_FEE: 'Payment Method Fee',
        PAYMENT_FEE: 'Payment Fee ($)'
      },
      BURN: {
        ID: '#',
        DATE: 'date',
        TIME: 'time',
        USER_MSISDN: 'userMSISDN',
        USER_TELCO_PROVIDER: 'userTelcoProvider',
        RECEIVER_MSISDN: 'receiverMSISDN',
        RECEIVER_TELCO_PROVIDER: 'receiverTelcoProvider',
        ACTIVITY_ID: 'activityId',
        SERVICE_TRANS_ID: 'serviceTransId',
        TRANSACTION_STATUS: 'transactionStatus',
        COINS_BURNED: 'coinsBurned',
        BRAND_NAME: ' Brand Name (brandCode)',
        PRODUCT_NAME: 'Product Name (productCode)',
        PRODUCT_DENOMINATOR: 'Product Denominator (denominatorCode)',
        PRODUCT_TYPE: 'Product Type (productType)',
        PRODUCT_PROVIDER: 'Product Providers (provider)',
        PRICE: 'Price in USD (price)'
      },
      USER_INFO: {
        ID: '#',
        UUID: 'UUID',
        MSISDN: 'MSISDN',
        TELCO_PROVIDER: 'Telco Provider',
        FULL_NAME: 'Full Name',
        USER_TYPE: 'Type',
        CREATED_AT: 'Created At',
        UPDATED_AT: 'Updated At'
      },
      REWARD: {
        ID: '#',
        DATE_OF_PURCHASE: 'Date of Purchase',
        TIME_OF_PURCHASE: 'Time of Purchase',
        TRANSACTION_ID: 'Transaction ID (service TransId)',
        RECEIVER_MSISDN: 'Receiver MSISDN',
        TOTAL_REWARDED_POINTS: 'Total Reward Points Received',
        BALANCE_POINTS: 'Balance Points of user',
        RECEIVER_TELCO_PROVIDER: 'Receiver Telco Provider',
        POINT_REWARD_ID: 'Point Reward ID (activityId)'
        // REWARD_NAME: 'Reward Name',
        // TYPE: 'Type',
        // TRIGGER_CHANNEL: 'Trigger Channel'
      }
    },
  
    TOP_UP_STATUS: {
      SUCCESS: 'SUCCESS',
      FAILED: 'FAILED'
    },
  
    TELCO_PROVIDER: {
      CELLCARD: 'Cellcard',
      COOTEL: 'CooTel',
      EMAXX: 'EMAXX(Star Digital)/Kingtel',
      SEATEL: 'Seatel',
      METFONE: 'Metfone',
      QB: 'qb',
      SMART: 'Smart',
      NOT_FOUND: 'Not Found'
    },
  
    NOTIFICATION_TYPE: {
      INTERNAL: 'INTERNAL',
      EXTERNAL: 'EXTERNAL'
    },
  
    SUBSCRIPTION_FILTERS: {
      PLAN: 'filter.entertainment=true'
    },
  
    CELLCARD_PLAN_STATUS: {
      AUTO_RENEW: 'A',
      NON_AUTO_RENEW: 'R',
      SUSPENDED: 'S'
    },
  
    DATA_PACKAGE_TYPES: {
      EXTRA: 'EXTRA',
      FACEBOOK: 'FACEBOOK',
      GAME: 'GAME'
    },
  
    API_TIMEOUT_CODE: 'ESOCKETTIMEDOUT',
  
    UNITS: {
      GB: 'GB'
    },
  
    CAMBODIA_TIMEZONE: 'Asia/Phnom_Penh',
  
    GIFT_CODE_GENERATION_STATUS: {
      REQUESTED: 'REQUESTED',
      GENERATED: 'GENERATED',
      FAILED: 'FAILED',
      IN_PROGRESS: 'IN_PROGRESS'
    },
  
    VOUCHERY_CALLBACK_EVENTS: {
      VOUCHER_REDEEMED: 'voucher_redeemed',
      VOUCHER_BATCH_CREATED: 'voucher_batch_created',
      VOUCHER_CREATED: 'voucher_created',
      VOUCHER_REDEMPTION_REJECTED: 'voucher_redemption_rejected',
      BUDGET_LIMIT_REACHED: 'budget_limit_reached',
      VOUCHER_REDEMPTION_LIMIT_REACHED: 'voucher_redemptions_limit_reached'
    },
  
    VOUCHERY_VOUCHER_STATUS: {
      REDEEMED: 'redeemed',
      CREATED: 'created',
      DISTRIBUTED: 'distributed',
      VALIDATED: 'validated',
      EXPIRED: 'expired'
    },
  
    VOUCHERY_VOUCHER_ACTIVE: {
      TRUE: 'true',
      FALSE: 'false'
    },
  
    CACHE_GROUP_ID: {
      CELLCARD_SUBSCRIPTION: 'subscription'
    },
  
    BUNDLE_STATUS: {
      RENEWED: 'RENEWED',
      PURCHASED: 'PURCHASED'
    },
  
    KEY_SIZES: {
      SIZE_256: 256
    },
  
    PLAY_PURCHASED_CHANNELS: {
      PLAY_UNLIMITED: 'PLAY UNLIMITED',
      CELLCARD_OCS: 'Cellcard OCS'
    },
  
    SEO_PAGE_TYPES: {
      PRODUCT: 'product',
      STATIC: 'static'
    },
  
    PROD_DESC: {
      PLAY_COIN: 'Play Coin',
      PLAY_PLAN: 'Play Plan'
    },
  
    REDEEMED_METHODS: {
      PLAY_APP: 'PLAY_APP',
      VOUCHERY_APP: 'VOUCHERY_APP'
    },
  
    USER_STATUS: {
      MEMBER: 'MEMBER',
      NON_MEMBER: 'NON-MEMBER'
    },
  
    DATE_STATUS: {
      EXPIRED: 'EXPIRED',
      REFILL: 'REFILL'
    },
  
    GA_EVENT_TYPES: {
      EVENT: 'event',
      TRANSACTION: 'transaction',
      ITEM: 'item'
    },
  
    CURRENCY_CODES: {
      USD: 'USD'
    },
  
    PRODUCT_CATEGORY: {
      PLAN: 'PLAN',
      COIN: 'COIN',
      PRODUCT: 'PRODUCT',
      REDEEM_GIFT: 'REDEEM_GIFT'
    }
  };
  