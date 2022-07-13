enum WebAppStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
  REVIEWING = "reviewing",
  CANCELED = "canceled",
}

export const mockUserData = {
  "query_id":"AAGc6AYzAAAAAJzoBjOa-6Y_",
  "user":{
    "id":856090780,
    "first_name":"Bogdan",
    "last_name":"A",
    "username":"bogdanaks",
    "language_code":"ru"
  },
  "auth_date":"1656771179",
  "hash":"8ac4765d56b0f95932b2a129c0729647e86cc0d3c9a375c768e4e9dcaff352f9"
}

export const mockAppsData: WebApp[] = [
  {
    "id": "1",
    "title": "Roblox",
    "short_description": "Roblox – это невероятная виртуальная вселенная для творчества.",
    "description": "Roblox – это невероятная виртуальная вселенная для творчества.",
    "image_url": "roblox.webp",
    "creator_id": "856090780",
    "link": "robloxBot",
    "category_id": "1",
    "type_id": "1",
    "status": WebAppStatus.DRAFT,
    "created_at": new Date(),
    "updated_at": new Date(),
    "type": {
      "id": "1",
      "title": "🤖 Bot",
      "slug": "bot",
      "created_at": new Date(),
      "updated_at": new Date(),
    },
    "category": {
      "id": "1",
      "title": "Social",
      "slug": "social",
      "created_at": new Date(),
      "updated_at": new Date(),
    }
  },
  {
    "id": "2",
    "title": "Minecraft",
    "short_description": "Исследуйте бесконечные миры и стройте что угодно.",
    "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
      obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
      tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
      quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
      sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
      recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
      minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
      quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur`,
    "image_url": "minecraft.webp",
    "creator_id": "856090780",
    "link": "bogdanaks",
    "category_id": "1",
    "type_id": "1",
    "status": WebAppStatus.DRAFT,
    "created_at": new Date(),
    "updated_at": new Date(),
    "type": {
      "id": "1",
      "title": "🤖 Bot",
      "slug": "bot",
      "created_at": new Date(),
      "updated_at": new Date(),
    },
    "category": {
      "id": "1",
      "title": "Social",
      "slug": "social",
      "created_at": new Date(),
      "updated_at": new Date(),
    }
  },
  {
    "id": "3",
    "title": "Subway Surfers",
    "short_description": "Помоги Jake, Tricky и Fresh сбежать от сердитого Инспектора и его пса фцвлор вцфлор фцвфцв флоцврлофрцв фцвфцв.",
    "description": "Помоги Jake, Tricky и Fresh сбежать от сердитого Инспектора и его пса фцвлор вцфлор фцвфцв флоцврлофрцв фцвфцв.",
    "image_url": "subway_serfers.webp",
    "creator_id": "856090780",
    "link": "subwayserfersbot",
    "category_id": "1",
    "type_id": "1",
    "status": WebAppStatus.PUBLISHED,
    "created_at": new Date(),
    "updated_at": new Date(),
    "type": {
      "id": "1",
      "title": "🤖 Bot",
      "slug": "bot",
      "created_at": new Date(),
      "updated_at": new Date(),
    },
    "category": {
      "id": "1",
      "title": "Social",
      "slug": "social",
      "created_at": new Date(),
      "updated_at": new Date(),
    }
  }
]

export const mockFavoriteApps: FavoriteWebApp[] = [
  {
    "id": "3",
    "tg_user_id": "2",
    "app_id": "1",
    "created_at": new Date(),
    "updated_at": new Date(),
    "app": mockAppsData[0]
  },
  {
    "id": "2",
    "tg_user_id": "2",
    "app_id": "2",
    "created_at": new Date(),
    "updated_at": new Date(),
    "app": mockAppsData[1]
  }
]

export const mockCategoryList: CategoryApp[] = [
  {
    "id": "1",
    "slug": "tools",
    "title": "Tools",
    "created_at": new Date(),
    "updated_at": new Date(),
  },
  {
    "id": "2",
    "slug": "education",
    "title": "Education",
    "created_at": new Date(),
    "updated_at": new Date(),
  },
  {
    "id": "3",
    "slug": "music",
    "title": "Music",
    "created_at": new Date(),
    "updated_at": new Date(),
  },
  {
    "id": "4",
    "slug": "crypto",
    "title": "Crypto",
    "created_at": new Date(),
    "updated_at": new Date(),
  },
  {
    "id": "5",
    "slug": "books",
    "title": "Books",
    "created_at": new Date(),
    "updated_at": new Date(),
  }
]