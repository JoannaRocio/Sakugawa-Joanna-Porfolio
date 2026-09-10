export const profileData = {
  name: "Sakugawa Joanna Rocio",
  shortName: "Joanna Sakugawa",
  role: "フロントエンドエンジニア",
  location: "埼玉県久喜市南栗橋、日本",
  contact: {
    email: "jrsakugawa@gmail.com",
    phone: "070-9294-0470",
    github: "https://github.com/JoannaRocio",
    linkedin: null
  },
  visaStatusTitle: "在留資格",
  visaStatus: "定住者 - 就労制限なし",
  cvFiles: {
    en: "/cv/CV_Joanna_Sakugawa_English.pdf",
    ja: "/cv/CV_Joanna_Sakugawa_Japanese.pdf",
    es: "/cv/CV_Joanna_Sakugawa_Spanish.pdf"
  },
  experience: [
    {
      id: "gire",
      company: "Gire S.A.",
      role: "フルスタックエンジニア",
      period: "2025年7月 – 2025年11月",
      location: "アルゼンチン・ブエノスアイレス",
      description: "レガシーシステムをReactを使用した最新のフロントエンド構成へリファクタリングし、バックエンドのREST APIを開発。",
      responsibilities: [
        "レガシーシステムをReactを使用した最新のフロントエンドアーキテクチャへリファクタリング。",
        "QRコード、カード、POS端末に対応した決済機能およびシステムモジュールを開発。",
        "JavaおよびSpring Bootを使用してREST APIのエンドポイントを開発。",
        "Dockerを使用してローカル開発環境を構築（Redis、データベース、ログインサービスなど）。"
      ],
      technologies: ["React", "Java", "Spring Boot", "Docker", "REST API", "Postman", "Scrum"]
    },
    {
      id: "nonconformist",
      company: "Nonconformist",
      role: "フロントエンドエンジニア",
      period: "2024年4月 – 2025年6月",
      location: "アルゼンチン・ブエノスアイレス",
      description: "企業向けWebプラットフォームの開発および再利用可能なUIコンポーネントライブラリの標準化。",
      responsibilities: [
        "Figmaのデザインをもとに、ReactとBootstrapを使用してAndina ARTのWebサイトをゼロから開発。",
        "Banco Macroのオンラインバンキングアプリ向けに、再利用可能なUIコンポーネントライブラリを開発。",
        "Storybookを使用してコンポーネントのデザインと仕様をドキュメント化し、デザインチームと開発チーム間の連携を支援。",
        "Design TokensとCSS変数を活用してSCSSのスタイル構成を整理し、テーマ変更に柔軟に対応できる設計を実現。"
      ],
      technologies: ["React", "TypeScript", "Bootstrap", "Storybook", "Next.js", "SASS/SCSS", "Figma"]
    },
    {
      id: "huenei",
      company: "Huenei IT Services",
      role: "フロントエンドエンジニア",
      period: "2023年3月 – 2024年3月",
      location: "アルゼンチン・ブエノスアイレス",
      description: "商業・財務管理向けWebアプリケーションの開発および保守。",
      responsibilities: [
        "取引管理および営業アプリケーション向けにレスポンシブなユーザーインターフェースを開発。",
        ".NETおよびJavaで構築されたバックエンドサービスとフロントエンドを連携。",
        "アプリケーションのパフォーマンスを最適化し、バグを修正してシステムの安定性を向上。"
      ],
      technologies: ["Angular", "React", "TypeScript", "Java", "Spring Boot", "Figma", "Kanban"]
    },
    {
      id: "fyo",
      company: "FYO",
      role: "フロントエンドエンジニア",
      period: "2021年12月 – 2023年2月",
      location: "アルゼンチン・サンタフェ",
      description: "高パフォーマンスなデータインターフェースおよび社内管理ツールの開発。",
      responsibilities: [
        "複雑なデータテーブルやユーザー権限管理機能を備えた社内Webツールを開発。",
        "Jasmineを使用したユニットテストを実装し、Azure DevOpsによるデプロイフローを管理。",
        "Adobe XDのプロトタイプをもとにレスポンシブデザインを実装し、Scrumによる反復的な開発サイクルに対応。"
      ],
      technologies: ["Angular", "TypeScript", "Jasmine", "Adobe XD", "Azure DevOps", "Scrum"]
    },
    {
      id: "baufest",
      company: "Baufest",
      role: "フルスタックエンジニア",
      period: "2019年7月 – 2021年12月",
      location: "アルゼンチン・ブエノスアイレス",
      description: "北米の国際顧客およびメディア企業向けのフルスタック開発。",
      responsibilities: [
        "米国のクライアントBCycle向けに、ASP.NET、.NET Core、SQL Serverを使用したフルスタック開発を担当。",
        "React、HTML5、CSS3を使用したWeb画面およびモバイル向けWeb機能を開発。",
        "Figmaのデザインとコンテンツ管理ツールを使用し、WarnerMedia向けのレスポンシブ画面を開発。"
      ],
      technologies: ["Angular", ".NET Core", "ASP.NET MVC", "Webflow", "C#", "SQL Server", "Docker", "Jira"]
    }
  ],
  education: [
    {
      institution: "ロマス・デ・サモラ国立大学",
      degree: "コンピュータプログラミング技術者",
      period: "2022年8月 – 2025年8月",
      status: "修了"
    }
  ],
  courses: [
    {
      title: "英語6年課程・英語B2認定",
      institution: "Cambridge International School of English",
      period: "2006年3月 – 2012年12月",
      status: "修了"
    }
  ],
  languages: [
    { name: "スペイン語", level: "ネイティブ" },
    { name: "英語", level: "中上級 / B2認定" },
    { name: "日本語", level: "初級" }
  ],
  skills: {
    Frontend: ["React (v18-19)", "Angular (v7-v18)", "Webflow", "TypeScript", "JavaScript", "Next.js", "RxJS", "Redux", "HTML5", "CSS3", "SASS/SCSS", "Material UI", "Bootstrap", "Storybook"],
    Backend: ["Java", "Spring Boot", "C#", ".NET Core", "ASP.NET MVC", "SQL Server", "MySQL", "REST APIs"],
    Tools: ["Git", "Docker", "Azure DevOps", "Postman", "Figma", "Adobe XD", "Jira", "Scrum", "Kanban", "Jest", "Jasmine"]
  }
};
