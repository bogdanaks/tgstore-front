type WebAppType = {
  id: string
  title: string
  slug: string
  created_at: Date
  updated_at: Date
}

type WebAppCategory = {
  id: string
  title: string
  slug: string
  created_at: Date
  updated_at: Date
}

enum WebAppStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
  REVIEWING = "reviewing",
  CANCELED = "canceled",
}

type WebApp = {
  id: string
  title: string
  short_description: string
  description: string
  category_id: string
  creator_id: string
  image_url: string
  link: string
  status: WebAppStatus
  type_id: string
  type: WebAppType
  category: WebAppCategory
  created_at: Date
  updated_at: Date
}

interface TgWebApp {
  expand: () => void
  openTelegramLink: (url: string) => void
  openLink: (url: string) => void
  setHeaderColor: (rgb: string) => void
  setBackgroundColor: (rgb: string) => void
  setText: (text: string) => void
  initData: string
  initDataUnsafe: {
    query_id: string
    user: {
      id: number
      first_name: string
      last_name: string
      language_code: string
    }
    auth_date: string
    hash: string
  }
  version: string
  colorScheme: string
  themeParams: {
    bg_color: string
    secondary_bg_color: string
    button_color: string
    button_text_color: string
    hint_color: string
    link_color: string
    text_color: string
  }
  isExpanded: boolean
  viewportHeight: number
  viewportStableHeight: number
  headerColor:string
  backgroundColor: string
  BackButton: {
    isVisible: boolean
    onClick: (cb: unknown) => void
    offClick: (cb: unknown) => void
    show: () => void
    hide: () => void
  }
  MainButton: {
    text: string
    color: string
    textColor: string
    isVisible: boolean
    isProgressVisible: boolean
    isActive: boolean
    setText: (text: string) => void
    show: () => void
    hide: () => void
    onClick: (cb: unknown) => void
    offClick: (cb: unknown) => void
  },
  HapticFeedback: unknown
}

interface TgWebView {
  callEventCallbacks: (eventType: string, func: any) => void
  initParams: object
  isIframe: false
  offEvent: (eventType: string, func: any) => void
  onEvent: (eventType: string, func: any) => void
  postEvent: (eventType: string, func: () => void, eventData: any) => void
  receiveEvent: (eventType: string, func: () => void, eventData: any) => void
}

type TypeApp = { id: string, slug: string, title: string, created_at: Date, updated_at: Date }
type CategoryApp = { id: string, slug: string, title: string, created_at: Date, updated_at: Date }

type FavoriteWebApp = {
  id: string
  tg_user_id: string
  app_id: string
  app: WebApp
  created_at: Date
  updated_at: Date
}