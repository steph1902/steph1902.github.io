document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            header_name: 'Stephanus Sujatmoko',
            header_title: 'DX Solution Architect & Full-Stack Software Engineer',
            japanese_resume_1: 'Resume (JP)',
            japanese_resume_2: 'Work History (JP)',
            header_location: 'Jakarta, Indonesia',
            summary_title: 'Professional Summary',
            summary_p1: 'Full-stack DX and software professional with 9+ years of experience driving digital transformation from concept (0→1) to full enterprise implementation. Specialized in transforming paper-based or fragmented workflows into integrated cloud systems using modern frameworks (Next.js, Laravel, React). Founded and scaled digital agency (PT. Arunika Global Creative) from 2 to 30+ team members while delivering 30+ digital transformation projects across logistics, e-commerce, government, and corporate sectors.',
            summary_p2: '<strong>Core expertise:</strong> Full-stack architecture, cloud infrastructure (AWS), performance optimization (consistently achieving 90+ Lighthouse scores), and bridging business-technology strategy. Proven track record converting manual processes into scalable, automated web platforms with measurable business outcomes. Experienced in remote collaboration with international teams across multiple time zones.',
            skills_title: 'Technical Skills',
            skills_frontend_title: 'Frontend Development',
            skills_backend_title: 'Backend Development',
            skills_db_title: 'Databases & ORMs',
            skills_devops_title: 'DevOps & Cloud',
            skills_testing_title: 'Testing & Quality Assurance',
            skills_monitoring_title: 'Monitoring & Performance',
            experience_title: 'Professional Experience',
            experience_job1_title: 'Founder & Lead Software Engineer',
            experience_job1_location: 'Jakarta, Indonesia',
            experience_job1_date: 'June 2019 - Present',
            experience_job1_li1: 'Led 30+ end-to-end DX projects (0→1), transforming paper-based workflows into complete digital systems using Next.js and Laravel, reducing manual data entry time by 70-85% across client organizations.',
            experience_job1_li2: 'Architected and developed full-stack solutions including custom CMS platforms, e-commerce systems with payment gateway integration (processing $500K+ in annual transactions), and enterprise business applications serving 10,000+ users.',
            experience_job1_li3: 'Built and scaled technical team from 2 to 30+ members (developers, designers, content creators), implementing agile processes that improved project delivery speed by 40%.',
            experience_job1_li4: 'Consistently achieved 90+ Lighthouse performance scores and maintained 99.8% uptime across production systems.',
            experience_job2_title: 'IT Project Manager (Contract)',
            experience_job2_location: 'Jakarta, Indonesia',
            experience_job2_date: 'May 2022 - October 2022',
            experience_job2_li1: 'Managed full-stack development project for banking wealth management system, coordinating team of 8 developers to deliver features 15% ahead of schedule.',
            experience_job2_li2: 'Coordinated with cross-functional technical teams across Product, Design, and QA to maintain 95%+ sprint completion rate.',
            experience_job2_li3: 'Implemented code review processes that reduced production bugs by 40% while maintaining delivery velocity.',
            experience_job3_title: 'Head of Information Technology Department (Contract)',
            experience_job3_location: 'Jakarta, Indonesia',
            experience_job3_date: 'January 2020 - May 2022',
            experience_job3_li1: 'Led comprehensive DX program replacing paper-based logistics operations with integrated web systems, eliminating 40+ hours/week of manual work and reducing operational errors by 80%.',
            experience_job3_li2: 'Developed and maintained 4 critical business systems (Warehouse Management, HR, Finance, customer-facing website) serving 100+ employees and 500+ customers, achieving 99.5% uptime.',
            experience_job3_li3: 'Optimized database queries and implemented caching strategies, reducing average API response time from 800ms to 120ms (85% improvement).',
            projects_title: 'Project Portfolio',
            projects_project1_title: 'E-commerce Platform: kpgfood.co.id',
            projects_project1_desc: 'Complete online shop with end-to-end payment gateway integration.',
            view_project: 'View Project',
            projects_project2_title: 'Government Digital Portal: sdgs.jakarta.go.id',
            projects_project2_desc: 'Jakarta City Hall SDGs website with 70% increase in user satisfaction.',
            projects_project3_title: 'Enterprise Business Systems (Metro Logistik Indonesia)',
            projects_project3_desc: 'WHMS, HRMS, Finance System, and Logistics Tracking Integration.',
            personal_projects_title: 'Personal Projects Portfolio',
            personal_project1_title: 'FinanceFlow - Personal Finance Management SaaS',
            personal_project1_desc: 'Production-ready full-stack SaaS application for personal finance tracking with real-time analytics, interactive visualizations, and intelligent budget management. Built with Next.js 16, React 19, TypeScript, and PostgreSQL.',
            personal_project1_tech: 'Tech Stack:',
            personal_project1_highlights: 'Key Achievements:',
            personal_project1_highlight1: 'Lighthouse Score: 92/100 Performance, 96/100 Accessibility',
            personal_project1_highlight2: '85% faster transaction entry compared to spreadsheets (<10s vs 60s)',
            personal_project1_highlight3: 'Real-time financial analytics with interactive charts and budget tracking',
            personal_project1_highlight4: 'Secure authentication (bcrypt + Google OAuth) with WCAG AA compliance',
            view_demo: 'View Live Demo',
            view_code: 'View Source Code',
            certifications_title: 'Certifications & Professional Development',
            certifications_progress: 'Currently pursuing AWS Certified Solutions Architect and other professional certifications to further strengthen cloud infrastructure and system design expertise.',
            languages_title: 'Languages',
            lang_english: 'English:',
            lang_english_level: 'Professional Working Proficiency',
            lang_indonesian: 'Indonesian:',
            lang_indonesian_level: 'Native Speaker',
            lang_japanese: 'Japanese:',
            lang_japanese_level: 'Business Proficiency',
            education_title: 'Education',
            education_degree: 'Bachelor of Computer Science - Information Technology',
            education_university: 'Universitas Bina Nusantara (Binus)',
            education_location: 'Jakarta, Indonesia',
            footer_name: 'Stephanus Sujatmoko',
        },
        jp: {
            header_name: 'ステファヌス・スジャトモコ',
            header_title: 'DXソリューションアーキテクト＆フルスタックソフトウェアエンジニア',
            japanese_resume_1: '履歴書',
            japanese_resume_2: '職務経歴書',
            header_location: 'ジャカルタ、インドネシア',
            summary_title: '職務経歴の概要',
            summary_p1: 'コンセプト（0→1）から本格的なエンタープライズ実装まで、9年以上の経験を持つフルスタックDXおよびソフトウェアプロフェッショナル。紙ベースまたは断片化されたワークフローを、最新のフレームワーク（Next.js、Laravel、React）を使用して統合クラウドシステムに変換することに特化しています。デジタルエージェンシー（PT. Arunika Global Creative）を2人から30人以上のチームメンバーに拡大し、物流、電子商取引、政府、企業セクターで25以上のデジタルトランスフォーメーションプロジェクトを提供しました。',
            summary_p2: '<strong>コア専門知識：</strong>フルスタックアーキテクチャ、クラウドインフラストラクチャ（AWS）、パフォーマンス最適化（一貫して90以上のLighthouseスコアを達成）、およびビジネステクノロジー戦略の橋渡し。手動プロセスを、測定可能なビジネス成果をもたらすスケーラブルで自動化されたWebプラットフォームに変換した実績があります。複数のタイムゾーンにわたる国際チームとのリモートコラボレーションの経験があります。',
            skills_title: '技術スキル',
            skills_frontend_title: 'フロントエンド開発',
            skills_backend_title: 'バックエンド開発',
            skills_db_title: 'データベースとORM',
            skills_devops_title: 'DevOpsとクラウド',
            skills_testing_title: 'テストと品質保証',
            skills_monitoring_title: 'モニタリングとパフォーマンス',
            experience_title: '職務経歴',
            experience_job1_title: '創設者兼リードソフトウェアエンジニア',
            experience_job1_location: 'ジャカルタ、インドネシア',
            experience_job1_date: '2019年6月 - 現在',
            experience_job1_li1: 'Next.jsとLaravelを使用して、紙ベースのワークフローを完全なデジタルシステムに変換する25以上のエンドツーエンドDXプロジェクト（0→1）を主導し、クライアント組織全体で手動データ入力時間を70-85%削減しました。',
            experience_job1_li2: 'カスタムCMSプラットフォーム、支払いゲートウェイ統合を備えた電子商取引システム（年間50万ドル以上の取引を処理）、10,000人以上のユーザーにサービスを提供するエンタープライズビジネスアプリケーションなどのフルスタックソリューションを設計および開発しました。',
            experience_job1_li3: '2人から30人以上の技術チーム（開発者、デザイナー、コンテンツクリエーター）を構築および拡大し、プロジェクトの提供速度を40%向上させるアジャイルプロセスを実装しました。',
            experience_job1_li4: '一貫して90以上のLighthouseパフォーマンススコアを達成し、本番システム全体で99.8%のアップタイムを維持しました。',
            experience_job2_title: 'ITプロジェクトマネージャー（契約）',
            experience_job2_location: 'ジャカルタ、インドネシア',
            experience_job2_date: '2022年5月 - 2022年10月',
            experience_job2_li1: '銀行のウェルスマネジメントシステムのフルスタック開発プロジェクトを管理し、8人の開発者チームを調整して、スケジュールより15%早く機能を提供しました。',
            experience_job2_li2: 'プロダクト、デザイン、QAにわたる部門横断的な技術チームと連携し、95%以上のスプリント完了率を維持しました。',
            experience_job2_li3: 'コードレビュープロセスを実装し、配信速度を維持しながら本番バグを40%削減しました。',
            experience_job3_title: '情報技術部門責任者（契約）',
            experience_job3_location: 'ジャカルタ、インドネシア',
            experience_job3_date: '2020年1月 - 2022年5月',
            experience_job3_li1: '紙ベースのロジスティクス業務を統合Webシステムに置き換える包括的なDXプログラムを主導し、週40時間以上の手動作業を排除し、業務エラーを80%削減しました。',
            experience_job3_li2: '100人以上の従業員と500人以上の顧客にサービスを提供する4つの重要なビジネスシステム（倉庫管理、人事、財務、顧客向けWebサイト）を開発および保守し、99.5%のアップタイムを達成しました。',
            experience_job3_li3: 'データベースクエリを最適化し、キャッシング戦略を実装することで、平均API応答時間を800msから120msに削減しました（85%の改善）。',
            projects_title: 'プロジェクトポートフォリオ',
            projects_project1_title: 'Eコマースプラットフォーム：kpgfood.co.id',
            projects_project1_desc: 'エンドツーエンドの支払いゲートウェイ統合を備えた完全なオンラインショップ。',
            view_project: 'プロジェクトを見る',
            projects_project2_title: '政府デジタルポータル：sdgs.jakarta.go.id',
            projects_project2_desc: 'ユーザー満足度が70％向上したジャカルタ市庁のSDGsウェブサイト。',
            projects_project3_title: 'エンタープライズビジネスシステム（メトロロジスティックインドネシア）',
            projects_project3_desc: 'WHMS、HRMS、財務システム、およびロジスティクス追跡統合。',
            personal_projects_title: '個人プロジェクトポートフォリオ',
            personal_project1_title: 'FinanceFlow - 個人財務管理SaaS',
            personal_project1_desc: 'リアルタイム分析、インタラクティブな視覚化、インテリジェントな予算管理を備えた個人財務追跡のための本番環境対応フルスタックSaaSアプリケーション。Next.js 16、React 19、TypeScript、PostgreSQLで構築。',
            personal_project1_tech: '技術スタック：',
            personal_project1_highlights: '主な成果：',
            personal_project1_highlight1: 'Lighthouseスコア：パフォーマンス92/100、アクセシビリティ96/100',
            personal_project1_highlight2: 'スプレッドシートと比較して85%高速な取引入力（10秒未満 vs 60秒）',
            personal_project1_highlight3: 'インタラクティブなチャートと予算追跡によるリアルタイム財務分析',
            personal_project1_highlight4: 'セキュアな認証（bcrypt + Google OAuth）とWCAG AA準拠',
            view_demo: 'ライブデモを見る',
            view_code: 'ソースコードを見る',
            certifications_title: '資格と専門能力開発',
            certifications_progress: 'AWS認定ソリューションアーキテクトおよびその他の専門資格を取得中で、クラウドインフラストラクチャとシステム設計の専門知識をさらに強化しています。',
            languages_title: '言語',
            lang_english: '英語：',
            lang_english_level: 'ビジネスレベル',
            lang_indonesian: 'インドネシア語：',
            lang_indonesian_level: 'ネイティブスピーカー',
            lang_japanese: '日本語：',
            lang_japanese_level: 'N5を目指しましょう',
            education_title: '学歴',
            education_degree: 'コンピューターサイエンス学士-情報技術',
            education_university: 'ビナヌサンタラ大学（ビヌス）',
            education_location: 'ジャカルタ、インドネシア',
            footer_name: 'ステファヌス・スジャトモコ',
        }
    };

    const langEnBtn = document.getElementById('lang-en');
    const langJpBtn = document.getElementById('lang-jp');

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        if (lang === 'jp') {
            langEnBtn.classList.remove('active');
            langJpBtn.classList.add('active');
        } else {
            langJpBtn.classList.remove('active');
            langEnBtn.classList.add('active');
        }
    };

    langEnBtn.addEventListener('click', () => setLanguage('en'));
    langJpBtn.addEventListener('click', () => setLanguage('jp'));

    // Set initial language
    setLanguage('en');
});