import type {
  JobType,
  PostType,
  ProfileType,
  ProjectType,
  AchievementType,
  GalleryPhotoType,
} from "@/types";
import { site } from "./site";
import { bullet, codeBlock, heading, paragraph, paragraphs, quote } from "./portable";

const avatar = {
  image: "/photos/abdifatah-faisal-portrait.jpg",
  lqip: "",
  alt: `${site.name} profile photo`,
};

export const profile: ProfileType = {
  _id: "profile",
  fullName: site.name,
  headline: "IT Professional, Front-End Developer, Digital Marketing Strategist & Entrepreneur",
  profileImage: avatar,
  shortBio:
    "I'm Abdifatah Faisal Yusuf, an Information Technology professional, Digital Marketing Strategist, Front-End Developer, and Entrepreneur from Somaliland. Founder & CEO of Digital Boost, Board Member of Dhidib Foundation, and passionate builder of technology solutions addressing real-world challenges.",
  email: site.email,
  location: site.location,
  resumeURL: site.resumeUrl,
  og: site.ogImage,
  fullBio: paragraphs(
    "I'm Abdifatah Faisal Yusuf, an Information Technology professional, Digital Marketing Strategist, Front-End Developer, and Entrepreneur from Somaliland. My professional journey is driven by a passion for technology, innovation, digital transformation, and building solutions that address real-world challenges.",
    "I hold a Bachelor's degree in Information Technology from the University of Hargeisa, where I developed a strong foundation in software development, information systems, programming, and modern technologies. Throughout my academic and professional journey, I've continuously worked to expand my technical capabilities, explore emerging technologies, and transform ideas into practical digital products.",
    "I'm the Founder and CEO of Digital Boost, a digital marketing agency focused on helping businesses establish, strengthen, and grow their online presence. Through Digital Boost, I lead digital marketing strategies, manage campaigns, develop brand identities, and help businesses leverage digital platforms to reach their target audiences through SEO, paid ads, content creation, and web development.",
    "Beyond entrepreneurship, I proudly serve as a Board Member of the Dhidib Foundation, an organization committed to youth empowerment, education, and community growth. At Dhidib, I host impactful training workshops, including the flagship '0 to Hero in Content Creation' program, equipping young creators and professionals with modern storytelling and digital skills.",
    "My technical interests extend beyond traditional IT into software engineering, Artificial Intelligence, Machine Learning, and emerging technologies. I have hands-on experience working with front-end development technologies and building applications that combine functionality with user-centered design, working on projects involving Flutter, Dart, React, Next.js, Python, computer vision, sign-language gesture recognition, and facial recognition systems.",
    "Alongside my technical and entrepreneurial work, I'm a content creator and digital communicator with over 4 Million+ views across social media platforms and an audience of more than 22,000 followers on TikTok (@the___pirate). I use digital platforms to share ideas, engage with communities, and explore the intersection of technology, creativity, and social impact. My long-term ambition is to contribute to the development of the technology ecosystem in Somaliland and across Africa while building expertise in AI, ML, and Robotics."
  ),
  usage: [
    heading("Development & Mobile"),
    paragraph(
      "React, Next.js, TypeScript, JavaScript, Tailwind CSS, Flutter, Dart, Vite, and Git."
    ),
    heading("AI, Machine Learning & Systems"),
    paragraph(
      "Python, Computer Vision (Gesture & Facial Recognition), Linux, Information Systems, and Automation."
    ),
    heading("Marketing, Strategy & Leadership"),
    paragraph(
      "Digital Marketing Strategy, SEO, Paid Ads, Brand Identity, TikTok & Social Growth (22K+ Community & 4M+ Views), and Community Mentorship."
    ),
  ],
};

export const jobs: JobType[] = [
  {
    _id: "job-digital-boost",
    name: "Digital Boost",
    jobTitle: "Founder & CEO",
    logo: site.avatar,
    url: "https://github.com/abdifatah-com",
    description:
      "Leading digital marketing strategies, campaigns, brand identities, SEO, and web development to help businesses establish and grow their online presence.",
    startDate: "2024-01-01",
    endDate: "",
  },
  {
    _id: "job-dhidib",
    name: "Dhidib Foundation",
    jobTitle: "Board Member & Lead Trainer",
    logo: site.avatar,
    url: "https://github.com/abdifatah-com",
    description:
      "Serving on the Board of Directors driving youth empowerment, curiosity, and learning. Hosting training workshops including the flagship '0 to Hero in Content Creation' masterclass.",
    startDate: "2024-06-01",
    endDate: "",
  },
  {
    _id: "job-gravity",
    name: "Gravity Tech Community",
    jobTitle: "Founder",
    logo: site.avatar,
    url: site.githubUrl,
    description:
      "Founded Gravity Tech Community to create a vibrant hub for developers in Somaliland to learn, share, and grow through peer mentorship and engineering sessions.",
    startDate: "2024-01-01",
    endDate: "",
  },
  {
    _id: "job-codveda",
    name: "Codveda Technologies",
    jobTitle: "Front-End Developer Intern",
    logo: site.avatar,
    url: "https://github.com/abdifatah-com",
    description:
      "Received internship offer for front-end development, building clean, responsive interfaces and implementing modern web architectures.",
    startDate: "2024-08-01",
    endDate: "2024-11-01",
  },
  {
    _id: "job-sylc",
    name: "Somaliland Youth Leadership Community (SYLC)",
    jobTitle: "Smart Volunteer Member",
    logo: site.avatar,
    url: "https://github.com/abdifatah-com",
    description:
      "Selected as a Smart Volunteer Member contributing to youth development, leadership training, and grassroots community initiatives.",
    startDate: "2024-03-01",
    endDate: "",
  },
];

export const projects: ProjectType[] = [
  {
    _id: "project-dhidib",
    name: "Dhidib Foundation Website",
    slug: "dhidib-foundation",
    tagline: "Youth empowerment and community development platform built with Next.js & Tailwind CSS.",
    projectUrl: "https://www.dhidib.org/",
    repository: "https://github.com/abdifatah-com/Dhidib-Site",
    logo: "",
    coverImage: {
      image: "/projects/dhidib-foundation.svg",
      alt: "Dhidib Foundation Website",
      lqip: "",
    },
    description: paragraphs(
      "A modern, professional, and fully responsive website for Dhidib Foundation, a non-profit organization dedicated to youth empowerment, education, curiosity, and grassroots community growth.",
      "Engineered with Next.js 14 App Router, TypeScript, Tailwind CSS, and ShadCN/UI. The site features program directories, upcoming event schedules, youth masterclass registration portals (including '0 to Hero in Content Creation'), and community impact reports.",
      "Optimized for high accessibility, blazing performance scores on Google Lighthouse, and seamless responsiveness across desktop, tablet, and mobile devices."
    ),
  },
  {
    _id: "project-kaydso",
    name: "Kaydso — Digital Community Savings",
    slug: "kaydso",
    tagline: "Award-winning community asset management & savings platform (3rd Place Xalkadoon 2025).",
    projectUrl: "",
    repository: "https://github.com/abdifatah-com/Kaydso-Site",
    logo: "",
    coverImage: {
      image: "/projects/kaydso.svg",
      alt: "Kaydso — Digital Community Savings",
      lqip: "",
    },
    description: paragraphs(
      "Kaydso is an innovative financial technology solution that modernizes traditional informal communal savings systems (known as Hagbad or Ayuto) into transparent, automated digital wallets.",
      "Awarded 3rd place with a $2,000 cash grant in the nationwide Xalkadoon Hackathon 2025 organized by Telesom Academy and Telesom Group.",
      "Features contribution cycle scheduling, automated ledger tracking, member verification, and secure financial activity streams designed specifically for local and regional African communities."
    ),
  },
  {
    _id: "project-goatie",
    name: "Goatie AI Platform",
    slug: "goatie-ai",
    tagline: "Autonomous Generative UI platform compiling human conversation into reactive apps.",
    projectUrl: "https://goatie-ai-iv25.vercel.app",
    repository: "https://github.com/abdifatah-com/goatie-ai",
    logo: "",
    coverImage: {
      image: "/projects/goatie-ai.svg",
      alt: "Goatie AI Platform",
      lqip: "",
    },
    description: paragraphs(
      "The autonomous Generative UI platform that compiles human conversation into reactive, stateful, and production-ready applications in real time.",
      "Engineered with TypeScript, Next.js, and modern LLM orchestration. Translates natural language requirements into functional component trees with live code generation, interactive sandbox preview, and instant export capabilities."
    ),
  },
  {
    _id: "project-adeegify",
    name: "Adeegify — Public Services",
    slug: "adeegify",
    tagline: "Hybrid digital platform streamlining public and civic services through a unified experience.",
    projectUrl: "https://adeegify.vercel.app",
    repository: "https://github.com/abdifatah-com/Adeegify",
    logo: "",
    coverImage: {
      image: "/projects/adeegify.svg",
      alt: "Adeegify",
      lqip: "",
    },
    description: paragraphs(
      "A hybrid mobile and web platform that simplifies citizen access to multiple public and civic services through a unified digital experience.",
      "Provides request submission, service verification, municipal notifications, and tracking dashboards to eliminate bureaucratic friction and digitize public interaction."
    ),
  },
  {
    _id: "project-tcmc",
    name: "Traditional Chinese Medical Centre",
    slug: "traditional-chinese-medical-centre",
    tagline: "Healthcare and clinic web portal promoting traditional therapy and patient consultations.",
    projectUrl: "https://traditionalchinese-tan.vercel.app",
    repository: "https://github.com/abdifatah-com/Traditional-chinese-medical-centre",
    logo: "",
    coverImage: {
      image: "/projects/traditional-chinese-medical-centre.svg",
      alt: "Traditional Chinese Medical Centre",
      lqip: "",
    },
    description: paragraphs(
      "Promoting Traditional Chinese Medicine and supporting better health through a dedicated clinical web portal.",
      "Built with JavaScript and modern CSS, the site features treatment overviews (acupuncture, herbal medicine, cupping therapy), patient wellness education, practitioner credentials, and an appointment booking inquiry flow."
    ),
  },
  {
    _id: "project-outhink",
    name: "Outhink Academy",
    slug: "outhink-academy",
    tagline: "Interactive online learning and academy portal built with React, TypeScript & Tailwind.",
    projectUrl: "https://outhink-academy-iyec.vercel.app/",
    repository: "https://github.com/abdifatah-com/Outhink-Academy-",
    logo: "",
    coverImage: {
      image: "/projects/outhink-academy.svg",
      alt: "Outhink Academy",
      lqip: "",
    },
    description: paragraphs(
      "A modern, full-featured web application built with React, TypeScript, and cutting-edge UI libraries.",
      "Offers course discovery, curriculum structures, student enrollment pathways, and interactive study modules tailored for digital education."
    ),
  },
  {
    _id: "project-ai-notepad",
    name: "AI Gesture Notepad & Sign Recognition",
    slug: "ai-gesture-notepad",
    tagline: "Intelligent desktop note application with MediaPipe hand gesture & voice-to-text recognition.",
    projectUrl: "",
    repository: "https://github.com/abdifatah-com/AI-Powered-Notepad-with-Hand-Gesture-Recognition-",
    logo: "",
    coverImage: {
      image: "/projects/ai-gesture-notepad.svg",
      alt: "AI Gesture Notepad",
      lqip: "",
    },
    description: paragraphs(
      "A modern accessibility-focused intelligent notepad built with HTML, CSS, JavaScript, MediaPipe, and TensorFlow that lets users interact using hand gestures.",
      "Recognizes gestures such as 'Hello', 'Goodbye', 'Thank You', and 'I Love You' in real-time through webcam video streams.",
      "Includes voice-to-text transcription via Web Speech API, camera integration, multi-tab note management, dark/light themes, and packaging as a standalone Windows desktop app using Electron."
    ),
  },
  {
    _id: "project-face",
    name: "Biometric Face Recognition System",
    slug: "face-recognition",
    tagline: "Real-time facial detection and identity verification pipeline built with Python and OpenCV.",
    projectUrl: "",
    repository: "https://github.com/abdifatah-com/Face-recognition-",
    logo: "",
    coverImage: {
      image: "/projects/face-recognition.svg",
      alt: "Biometric Face Recognition",
      lqip: "",
    },
    description: paragraphs(
      "A Python-based computer vision system implementing real-time face detection, facial landmark extraction, and identity matching using OpenCV and deep learning algorithms.",
      "Designed to explore biometric verification, security authentication, and automation pipelines for smart attendance and access control."
    ),
  },
  {
    _id: "project-geed",
    name: "Geed Balaadh Restaurant",
    slug: "geed-balaadh-restaurant",
    tagline: "Modern digital menu showcase and hospitality portal built with JavaScript.",
    projectUrl: "https://abdifatah-com.github.io/Geed-Balaadh-Resturant-/",
    repository: "https://github.com/abdifatah-com/Geed-Balaadh-Resturant-",
    logo: "",
    coverImage: {
      image: "/projects/geed-balaadh-restaurant.svg",
      alt: "Geed Balaadh Restaurant",
      lqip: "",
    },
    description: paragraphs(
      "A digital dining showcase for Geed Balaadh Restaurant in Hargeisa. Displays appetizing food categories, authentic Somali and international dishes, chef recommendations, and customer reservation channels.",
      "Built with vanilla JavaScript and responsive design principles for fast load times on mobile devices."
    ),
  },
  {
    _id: "project-3d",
    name: "3D Interactive Portfolio",
    slug: "3d-portfolio",
    tagline: "Immersive 3D animated web experience built with React, Three.js, and Vite.",
    projectUrl: "https://3-d-portfolio-rho-self.vercel.app/",
    repository: "https://github.com/abdifatah-com/3D-Portfolio-",
    logo: "",
    coverImage: {
      image: "/projects/3d-portfolio.svg",
      alt: "3D Interactive Portfolio",
      lqip: "",
    },
    description: paragraphs(
      "An animated 3D portfolio utilizing React, Three.js, and Vite. Features 3D model rendering, interactive scene cameras, smooth animations, and showcase sections for skills and writing."
    ),
  },
  {
    _id: "project-financial",
    name: "Modern Financial Dashboard",
    slug: "financial-dashboard",
    tagline: "Real-time balance analytics and transaction management frontend built with TypeScript.",
    projectUrl: "",
    repository: "https://github.com/abdifatah-com/-Financial-Dashboard-Website",
    logo: "",
    coverImage: {
      image: "/projects/financial-dashboard.svg",
      alt: "Modern Financial Dashboard",
      lqip: "",
    },
    description: paragraphs(
      "A responsive, modern frontend financial dashboard presenting cashflow charts, balance summaries, account transfer logs, and expense categorical breakdowns.",
      "Built with TypeScript and modern component patterns emphasizing type safety, data visualization, and crisp dark mode interfaces."
    ),
  },
];

const author = {
  name: site.name,
  photo: avatar,
  twitterUrl: site.linkedinUrl,
};

function post(
  partial: Omit<PostType, "author" | "isPublished"> & {
    featured?: boolean;
    coverImage?: {
      image: string;
      lqip?: string;
      alt?: string | null;
    };
  }
): PostType {
  return {
    ...partial,
    author,
    featured: partial.featured ?? false,
    isPublished: true,
    coverImage: {
      image: partial.coverImage?.image || "/photos/abdifatah-faisal-portrait.jpg",
      lqip: partial.coverImage?.lqip || "",
      alt: partial.coverImage?.alt || partial.title,
    },
  };
}

export const posts: PostType[] = [
  post({
    _id: "post-profile",
    _createdAt: "2026-02-15",
    title: "My Journey in Tech: From Hargeisa to Building AI & Cloud Systems",
    slug: "my-journey-info-tech-ai-computer-vision",
    description:
      "A reflection on my path through software engineering, artificial intelligence, computer vision, entrepreneurship, and community leadership in Somaliland.",
    date: "2026-02-15",
    tags: ["Personal Journey", "Information Technology", "AI", "Somaliland Tech"],
    featured: true,
    coverImage: {
      image: "/blogs/thesis_defense.jpg",
      lqip: "",
      alt: "Abdifatah Faisal Yusuf thesis defense at University of Hargeisa",
    },
    body: [
      paragraph(
        "Technology across East Africa is advancing at an unprecedented pace. Growing up in Hargeisa, I witnessed how mobile financial networks, digital telecommunications, and cloud-connected platforms fundamentally transformed commerce, communications, and daily life. That technological surge sparked an insatiable curiosity within me: I did not want to merely be a passive consumer of software—I wanted to design, architect, and construct the intelligent systems that drive our community forward."
      ),
      heading("The Academic Foundation: University of Hargeisa", "h2"),
      paragraph(
        "My journey reached a critical milestone during my Bachelor of Science studies in Information Technology at the University of Hargeisa. The academic curriculum immersed me in relational database architecture, distributed systems, operating system internals, and modern software engineering. For our final degree thesis defense, our team engineered and presented advanced technical solutions that validated our capability to bridge rigorous academic theory with production software architecture."
      ),
      quote(
        "True engineering excellence is not measured solely by lines of code written, but by the tangible, sustainable value delivered to real people facing real constraints."
      ),
      heading("Diving Deep into AI & Computer Vision", "h2"),
      paragraph(
        "While mastering modern full-stack web development with React, Next.js, and TypeScript, I became deeply fascinated by computer vision and artificial intelligence. I invested hundreds of hours experimenting with spatial landmark extraction, sign-language gesture interpretation, and real-time facial verification using Python and OpenCV."
      ),
      paragraph(
        "The ability to take raw camera matrix feeds, isolate 21 3D hand coordinates in under 15 milliseconds, and translate natural physical gestures into seamless digital actions proved that the barrier between human intention and computer interfaces can be fundamentally reimagined."
      ),
      heading("Entrepreneurship with Digital Boost & Mentoring at Dhidib", "h2"),
      paragraph(
        "Technical proficiency produces the greatest impact when combined with sharp market strategy. Founding Digital Boost gave me firsthand experience leading client acquisitions, digital growth funnels, performance marketing, and corporate branding. We have guided diverse organizations across Somaliland in transitioning from physical storefronts to data-driven digital operations."
      ),
      paragraph(
        "Concurrently, serving as a Board Member at the Dhidib Foundation allowed me to spearhead hands-on community workshops like '0 to Hero in Content Creation'. Mentoring ambitious youth, creators, and upcoming engineers has been one of the most fulfilling dimensions of my career. Witnessing a student master their first modern web component or publish their first digital media campaign reinforces why grassroots tech education is vital."
      ),
      heading("Looking Ahead: Somaliland Tech on the Global Stage", "h2"),
      paragraph(
        "As we venture deeper into the era of autonomous AI agents, edge computing, and robotics, my mission remains steadfast: to engineer robust, high-performance digital infrastructure from Somaliland that can compete proudly on the global stage. The next decade belongs to builders who combine local empathy with world-class engineering execution."
      ),
    ],
  }),
  post({
    _id: "post-kaydso-awards",
    _createdAt: "2025-11-05",
    title: "Winning at Somaliland Tech Expo & Xalka Doon: The Kaydso Story",
    slug: "winning-somaliland-tech-expo-xalka-doon-kaydso",
    description:
      "How our team secured 3rd place at Somaliland Tech Expo 2025 ($6,500) and Xalka Doon 2025 ($2,000) by engineering a secure, localized cloud storage platform.",
    date: "2025-11-05",
    tags: ["Hackathons", "Kaydso", "Cloud Storage", "Startups", "Awards"],
    featured: true,
    coverImage: {
      image: "/blogs/tech_expo_2025_banner.jpg",
      lqip: "",
      alt: "Somaliland Tech Expo 2025 3rd Place Winner Trophy & Check",
    },
    body: [
      paragraph(
        "Hackathons are the ultimate crucible for engineering teams. In late 2025, our team entered two of the most competitive innovation showcases in the nation: Somaliland Tech Expo 2025 (presented by the Ministry of ICT and Capital Exhibitions) and Xalka Doon 2025 (sponsored by Telesom Group and Telesom Academy)."
      ),
      paragraph(
        "We walked away with 3rd Place and a $6,500 prize at the Tech Expo, followed by another 3rd Place and $2,000 prize at Xalka Doon. Here is the engineering story behind the product that convinced the judges: Kaydso."
      ),
      heading("The Problem: Data Sovereignty and Fragmented Storage", "h2"),
      paragraph(
        "In our regional ecosystem, businesses and academic institutions frequently store sensitive financial spreadsheets, student archives, and legal contracts on unencrypted external hard drives or loose messaging channels. Global cloud vendors create friction: international payment barriers, costly subscription tiers, and high-latency round trips to overseas data centers."
      ),
      quote(
        "We didn't just build another generic cloud clone; we engineered Kaydso around regional compliance, frictionless local currency billing, and zero-knowledge client-side encryption."
      ),
      heading("Architecting the System for Resilient Streaming", "h2"),
      paragraph(
        "Under the hood, Kaydso was architected to handle erratic network conditions and large binary objects seamlessly. We engineered a chunked multi-part upload pipeline where files are partitioned into 5MB byte slices client-side, verified with SHA-256 integrity hashes, and dispatched across concurrent streams with exponential backoff."
      ),
      codeBlock(
        `// Multi-part chunked upload pipeline with retry buffer
async function uploadChunk(fileId: string, chunk: Blob, index: number): Promise<void> {
  const hash = await calculateSHA256(chunk);
  const response = await fetch('/api/storage/upload-chunk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      'X-File-Id': fileId,
      'X-Chunk-Index': index.toString(),
      'X-Chunk-Hash': hash,
    },
    body: chunk,
  });

  if (!response.ok) {
    throw new Error(\`Failed to upload chunk \${index}. Status: \${response.status}\`);
  }
}`,
        "typescript",
        "uploadPipeline.ts"
      ),
      heading("Pitching on Stage to Industry Judges", "h2"),
      paragraph(
        "Holding participant card #09 on the main stage of the Tech Expo, the atmosphere was intense. We had five minutes to demonstrate a live zero-loss encrypted upload, prove zero metadata leakage, and defend our technical architecture against questions on cryptography, data integrity, and compliance from academic and industry judges."
      ),
      heading("Key Takeaways for Future Competitors", "h2"),
      bullet("Solve a painful, authentic problem in your community rather than replicating Silicon Valley apps without local context."),
      bullet("A live, functioning prototype beats thirty conceptual slides every single time."),
      bullet("Invest deeply in performance: snappy UI response times under live demo conditions leave a lasting impression on judges."),
    ],
  }),
  post({
    _id: "post-ai-coding",
    _createdAt: "2025-01-20",
    title: "Computer Vision & AI: Building Real-Time Gesture & Face Recognition",
    slug: "the-future-of-web-development-ai-powered-coding",
    description:
      "A technical walkthrough of how I built real-time computer vision models for gesture recognition and facial detection using Python and OpenCV.",
    date: "2025-01-20",
    tags: ["Computer Vision", "AI", "Python", "OpenCV", "Deep Learning"],
    featured: true,
    coverImage: {
      image: "/blogs/future-of-web-dev-ai.jpg",
      lqip: "",
      alt: "Computer Vision and AI Neural Network Visualization",
    },
    body: [
      paragraph(
        "Human-computer interfaces have historically been bound to mice, keyboards, and touch displays. Computer vision breaks those boundaries by turning video streams into natural interaction channels. Over the past year, I built and deployed multiple computer vision models focused on sign-language gesture interpretation and real-time facial feature tracking."
      ),
      heading("The Landmark Detection Pipeline", "h2"),
      paragraph(
        "Rather than pumping entire high-resolution camera frames into computationally heavy deep convolutional networks, we utilize spatial landmark tracking. MediaPipe identifies 21 three-dimensional articulation points across each hand and 468 mesh points on facial geometry in real time on standard consumer hardware."
      ),
      codeBlock(
        `import cv2
import mediapipe as mp
import numpy as np

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(
    static_image_mode=False,
    max_num_hands=2,
    min_detection_confidence=0.75,
    min_tracking_confidence=0.75
)

def extract_normalized_landmarks(frame):
    # Convert BGR video frame to RGB
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(rgb_frame)
    
    if not results.multi_hand_landmarks:
        return None
        
    landmarks = []
    for hand_landmarks in results.multi_hand_landmarks:
        for lm in hand_landmarks.landmark:
            landmarks.extend([lm.x, lm.y, lm.z])
            
    return np.array(landmarks, dtype=np.float32)`,
        "python",
        "vision_pipeline.py"
      ),
      heading("Geometric Normalization for Scale and Rotation", "h2"),
      paragraph(
        "Raw coordinate values vary significantly depending on camera distance and angle. To ensure high inference accuracy, we center landmarks around the wrist origin (landmark 0) and normalize the scale by Euclidean distance between the wrist and the base knuckle of the middle finger."
      ),
      quote(
        "Geometric normalization allows a lightweight multilayer perceptron to reach 98.4% classification accuracy at 60 FPS without requiring cloud GPU infrastructure."
      ),
      heading("Bridging Vision Models with Modern Web Frontends", "h2"),
      paragraph(
        "By streaming low-bandwidth normalized landmark vectors across WebSockets to a Next.js frontend, we built an interactive digital whiteboard controlled purely through natural hand gestures. This architecture demonstrates promising real-world applications in touchless medical consoles and accessible educational software."
      ),
    ],
  }),
  post({
    _id: "post-rsc",
    _createdAt: "2024-12-18",
    title: "Mastering React Server Components & Next.js Architecture",
    slug: "mastering-react-server-components",
    description:
      "Deep dive into React Server Components, eliminating client bundle bloat, streaming SSR with Suspense, and full-stack performance patterns.",
    date: "2024-12-18",
    tags: ["React", "Next.js", "Performance", "Full Stack"],
    featured: true,
    coverImage: {
      image: "/blogs/react-server-components.jpg",
      lqip: "",
      alt: "React Server Components Architecture Diagram",
    },
    body: [
      paragraph(
        "React Server Components (RSC) represent the most fundamental shift in the React ecosystem since hooks were introduced in 2018. For years, client-rendered single-page applications suffered under bloated JavaScript bundles, cascading useEffect waterfalls, and layout flickers during hydration."
      ),
      heading("Zero-Bundle-Size Server Components", "h2"),
      paragraph(
        "In Next.js App Router, every component is a Server Component by default. Server Components execute exclusively on the server. Dependencies consumed only within them—such as database clients, syntax highlighters, or date formatters—never ship a single byte of JavaScript to the browser."
      ),
      codeBlock(
        `// app/dashboard/page.tsx - Executes strictly on the server
import { db } from "@/lib/database";
import { Suspense } from "react";
import AnalyticsChart from "./AnalyticsChart"; // Client Component

export default async function DashboardPage() {
  // Direct server database query - zero API layer overhead
  const metrics = await db.analytics.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Performance Analytics</h1>
      <Suspense fallback={<p>Streaming metrics data...</p>}>
        <AnalyticsChart initialData={metrics} />
      </Suspense>
    </main>
  );
}`,
        "tsx",
        "app/dashboard/page.tsx"
      ),
      heading("The Boundaries: When to use 'use client'", "h2"),
      paragraph(
        "A common point of confusion is thinking 'use client' marks code to run exclusively in the browser. In reality, it establishes the serialization boundary where React prepares HTML on the server and hydrates interactivity in the browser. Best practice is to push the client boundary as deep into your component hierarchy as possible."
      ),
      bullet("Keep data fetching, security credentials, and heavy business logic inside Server Components."),
      bullet("Isolate state, browser APIs, and event listeners (onClick, onChange) into discrete interactive client leaves."),
      bullet("Pass Server Components as `children` into Client Component wrappers to avoid importing server dependencies into client bundles."),
    ],
  }),
  post({
    _id: "post-design-systems",
    _createdAt: "2024-12-15",
    title: "Building Scalable Design Systems with Tailwind CSS & TypeScript",
    slug: "building-scalable-design-systems",
    description:
      "A comprehensive guide to crafting resilient, accessible design systems and type-safe UI component libraries that scale across production teams.",
    date: "2024-12-15",
    tags: ["Design Systems", "Tailwind CSS", "TypeScript", "UI/UX"],
    featured: false,
    coverImage: {
      image: "/blogs/scalable-design-systems.jpg",
      lqip: "",
      alt: "Scalable Design Systems UI Tokens and Components",
    },
    body: [
      paragraph(
        "A design system is not just a folder of visual assets; it is the official contract between design philosophy and software engineering. Without strict system tokens, scaling applications quickly suffer from inconsistent spacing, redundant CSS rules, and broken user flows."
      ),
      heading("Design Tokens as the Source of Truth", "h2"),
      paragraph(
        "We build systems from the atomic level upwards: semantic color roles (primary, destructive, surface, muted), typography hierarchies, spacing grids, and elevation shadows. Pairing Tailwind CSS with CSS custom variables makes instant theme switching (light/dark) possible without recalculating DOM styles."
      ),
      codeBlock(
        `import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
        secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 focus-visible:ring-zinc-600",
        outline: "border border-zinc-700 text-zinc-300 hover:bg-zinc-800",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);`,
        "typescript",
        "components/ui/Button.tsx"
      ),
      heading("Strict Accessibility (a11y) Standards", "h2"),
      paragraph(
        "A production design system must treat accessibility as non-negotiable. Every interactive component must follow WCAG 2.1 AA specifications: robust focus-visible indicators, proper ARIA states, and minimum 4.5:1 color contrast ratios across dark and light palettes."
      ),
    ],
  }),
  post({
    _id: "post-perf",
    _createdAt: "2024-12-10",
    title: "Web Performance Optimization: Practical Core Web Vitals Engineering",
    slug: "web-performance-optimization-techniques",
    description:
      "How to reliably achieve 100 on Google PageSpeed by optimizing LCP, eliminating INP delays, and pruning JavaScript payloads.",
    date: "2024-12-10",
    tags: ["Performance", "Web Vitals", "Optimization", "Next.js"],
    featured: false,
    coverImage: {
      image: "/blogs/web-performance-optimization.jpg",
      lqip: "",
      alt: "Web Performance Metrics and Core Web Vitals Gauge",
    },
    body: [
      paragraph(
        "Website performance directly influences user retention, engagement metrics, and organic search rank. Users make subconscious decisions about product quality within 200 milliseconds. If your web application lags or shifts abruptly during load, bounce rates skyrocket."
      ),
      heading("Optimizing Largest Contentful Paint (LCP)", "h2"),
      paragraph(
        "LCP measures how long it takes for the primary visual element above the fold to render. In modern web development, slow LCP is almost always caused by uncompressed images, render-blocking scripts, or client-side fetch cascades."
      ),
      bullet("Set the `priority` attribute on above-the-fold hero images in Next.js to trigger immediate preload tags in document head."),
      bullet("Serve images strictly in modern AVIF and WebP formats, achieving up to 70% smaller file sizes with zero perceptual degradation."),
      bullet("Self-host web fonts using `@next/font` with `font-display: swap` to eliminate Flash of Invisible Text (FOIT)."),
      heading("Taming Interaction to Next Paint (INP)", "h2"),
      paragraph(
        "INP measures UI responsiveness to clicks, taps, and keypresses. By breaking long tasks into smaller asynchronous chunks with `startTransition` and dynamically importing heavy dependencies only when interacted with, your UI thread remains butter-smooth."
      ),
    ],
  }),
  post({
    _id: "post-edge",
    _createdAt: "2024-12-08",
    title: "The Rise of Edge Computing & Low-Latency Cloud Architectures",
    slug: "the-rise-of-edge-computing",
    description:
      "Exploring edge functions, globally distributed CDNs, and region-aware compute to deliver lightning-fast digital experiences.",
    date: "2024-12-08",
    tags: ["Edge Computing", "Cloud", "Distributed Systems", "Architecture"],
    featured: false,
    coverImage: {
      image: "/blogs/rise-of-edge-computing.jpg",
      lqip: "",
      alt: "Global Distributed Edge Computing Network",
    },
    body: [
      paragraph(
        "Physical distance imposes hard physical limits on web latency. When an East African user queries a centralized server in us-east-1, optical signals require roughly 180 milliseconds round-trip before computation even begins. Edge computing solves this dilemma by running computation on distributed Points of Presence (PoPs) globally."
      ),
      heading("Edge Functions vs Traditional Serverless", "h2"),
      paragraph(
        "Unlike classic serverless functions that spin up complete Node.js container environments (often with 300ms+ cold starts), edge runtimes utilize lightweight V8 isolates. V8 isolates start in under 5 milliseconds with minuscule memory footprints under 128MB."
      ),
      codeBlock(
        `// middleware.ts - Edge runtime executing globally within 5ms of the client
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/admin/:path*", "/api/protected/:path*"],
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_session")?.value;

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}`,
        "typescript",
        "middleware.ts"
      ),
      heading("Strategic Edge Architecture Patterns", "h2"),
      bullet("Dynamic geo-routing and localized content delivery based on edge IP headers."),
      bullet("Edge authentication and JWT signature validation before incoming requests reach origin databases."),
      bullet("Zero-latency A/B experimentation and feature toggling without client layout flicker."),
      paragraph(
        "By offloading compute to the edge while retaining centralized transactional databases, engineering teams can build web applications that feel instantaneously responsive anywhere in the world."
      ),
    ],
  }),
];

export const galleryPhotos: GalleryPhotoType[] = [
  {
    id: "thesis-defense",
    src: "/photos/thesis-defense-uoh.jpg",
    title: "Bachelor's in IT Thesis Defense — University of Hargeisa",
    caption:
      "Proudly completing my Bachelor's degree in Information Technology with a successful thesis defense (Class of 2026) at the University of Hargeisa.",
    category: "Education & Milestones",
    date: "2026",
    featured: true,
  },
  {
    id: "dhidib-training",
    src: "/photos/dhidib-training-content-creation.jpg",
    title: "Hosting '0 to Hero in Content Creation' — Dhidib Foundation",
    caption:
      "Leading an interactive digital masterclass and training session for youth at Dhidib Foundation, teaching modern short-form storytelling, TikTok strategy, and digital brand development.",
    category: "Trainings & Mentorship",
    date: "2025",
    featured: true,
  },
  {
    id: "dhidib-board",
    src: "/photos/dhidib-board-member.jpg",
    title: "Board Member Presentation — Dhidib Foundation",
    caption:
      "Serving as a Board Member of Dhidib Foundation, building foundations for youth curiosity, connection, and grassroots community growth.",
    category: "Leadership & Community",
    date: "2025",
    featured: true,
  },
  {
    id: "tech-expo-winner",
    src: "/photos/tech-expo-somaliland-2025-winner.jpg",
    title: "3rd Place Winner — Somaliland Tech Expo 2025 ($6,500)",
    caption:
      "Awarded 3rd place with a $6,500 grand prize alongside the University of Hargeisa team at Somaliland Tech Expo 2025, presented by the Ministry of ICT (MICT) and Capital Exhibitions.",
    category: "Hackathons & Awards",
    date: "October 2025",
    featured: true,
  },
  {
    id: "xalka-doon-kaydso",
    src: "/photos/xalka-doon-2025-kaydso-winner.jpg",
    title: "3rd Place Winner — Xalka Doon 2025 ($2,000 Prize)",
    caption:
      "Holding the winning check of $2,000 for Kaydso at Xalka Doon 2025, backed by Telesom Group and Telesom Academy.",
    category: "Hackathons & Awards",
    date: "2025",
    featured: true,
  },
  {
    id: "tech-expo-pitch",
    src: "/photos/tech-expo-pitch-stage.jpg",
    title: "Live Pitching at Somaliland Tech Expo 2025",
    caption:
      "Presenting the solution on the main stage (Participant Card #09) before the distinguished panel of academic and tech industry judges.",
    category: "Speaking & Pitches",
    date: "October 2025",
    featured: true,
  },
  {
    id: "hackathon-presentation",
    src: "/photos/hackathon-presentation-mic.jpg",
    title: "Keynote & Hackathon Stage Presentation",
    caption:
      "Addressing the audience and jury during competitive pitch sessions with passion for software engineering and real-world impact.",
    category: "Speaking & Pitches",
    date: "2025",
    featured: true,
  },
  {
    id: "saxarla-art",
    src: "/photos/saxarla-culture-art-expo.jpg",
    title: "Inspiration, Creativity & Innovation — Saxarla Culture Art",
    caption:
      "Participating at the Saxarla cultural and innovation exhibition, celebrating Somali heritage, youth creativity, and innovation.",
    category: "Community & Culture",
    date: "2025",
    featured: true,
  },
  {
    id: "abdifatah-portrait",
    src: "/photos/abdifatah-faisal-portrait.jpg",
    title: "Abdifatah Faisal Yusuf — Studio Portrait",
    caption:
      "IT professional, Digital Marketing Strategist, Front-End Developer, and Entrepreneur based in Hargeisa, Somaliland.",
    category: "Portraits",
    date: "2025",
    featured: true,
  },
];

export const achievements: AchievementType[] = [
  {
    id: "tech-expo-2025",
    title: "3rd Place Winner — Somaliland Tech Expo 2025",
    subtitle: "University Hackathon Challenge — Ministry of ICT & Capital Exhibitions",
    category: "Hackathon",
    award: "3rd Place Winner",
    prize: "$6,500 USD",
    organizer: "Ministry of ICT (MICT) & Capital Exhibitions",
    date: "October 30, 2025",
    year: "2025",
    image: "/photos/tech-expo-somaliland-2025-winner.jpg",
    badge: "🏆 $6,500 Award",
    summary:
      "Represented the University of Hargeisa as part of the team that secured third place and a $6,500 award at the Somaliland Tech Expo, competing against university developers across Somaliland.",
    highlights: [
      "Represented the University of Hargeisa on the national technology stage.",
      "Pitched directly to a jury of senior software architects, professors, and government technology leaders.",
      "Awarded $6,500 prize recognition for technical innovation and viable implementation.",
    ],
    tags: ["Hackathon", "University of Hargeisa", "MICT", "Tech Expo 2025", "Somaliland"],
  },
  {
    id: "xalkadoon-2025",
    title: "3rd Place Winner — Xalkadoon Hackathon 2025",
    subtitle: "Creator of 'Kaydso' — Telesom Group & Telesom Academy",
    category: "Hackathon",
    award: "3rd Place Winner",
    prize: "$2,000 USD",
    organizer: "Telesom Group & Telesom Academy",
    date: "2025",
    year: "2025",
    image: "/photos/xalka-doon-2025-kaydso-winner.jpg",
    badge: "🥈 $2,000 Winner",
    summary:
      "Recognized during a technology competition organized through Telesom Academy. Designed and developed 'Kaydso' to address community savings and asset tracking.",
    highlights: [
      "Engineered the Kaydso prototype focused on secure, accessible digital saving mechanisms.",
      "Evaluated on technical feasibility, user experience, and potential market growth in the Horn of Africa.",
      "Awarded 3rd place with a $2,000 grant from Telesom Group.",
    ],
    tags: ["Xalkadoon", "Telesom Academy", "Kaydso", "Fintech", "Hackathon"],
  },
  {
    id: "dhidib-board-trainer",
    title: "Board Member & Lead Trainer — Dhidib Foundation",
    subtitle: "Hosting '0 to Hero in Content Creation' Masterclass",
    category: "Community",
    award: "Board Member & Masterclass Host",
    organizer: "Dhidib Foundation",
    date: "2024 - Present",
    year: "2024",
    image: "/photos/dhidib-training-content-creation.jpg",
    badge: "🌱 Board Member & Trainer",
    summary:
      "Serving on the Board of Directors of Dhidib Foundation. Designing and delivering intensive hands-on workshops including the flagship '0 to Hero in Content Creation' program to empower youth with storytelling and digital skills.",
    highlights: [
      "Board governance supporting youth education, curiosity, and grassroots community growth.",
      "Conducted interactive workshops training emerging creators on content creation, strategy, and audience growth.",
      "Mentored participants on turning digital skills into sustainable freelance and business careers.",
    ],
    tags: ["Dhidib Foundation", "Board Member", "0 to Hero", "Content Creation", "Youth Empowerment"],
  },
  {
    id: "mansa-musa-startup-school",
    title: "Mansa Musa Startup School Graduate",
    subtitle: "Nine-week entrepreneurship and startup development accelerator",
    category: "Award",
    award: "Program Graduate",
    organizer: "Mansa Musa Startup School",
    date: "2024",
    year: "2024",
    badge: "🎓 Startup Accelerator",
    summary:
      "Successfully completed a rigorous nine-week entrepreneurship and startup development program, covering business modeling, customer discovery, product validation, and investment readiness.",
    highlights: [
      "Completed 9 weeks of intensive startup training and venture building.",
      "Refined tech business models focused on scalable digital solutions in emerging markets.",
      "Engaged in pitch drills, go-to-market strategies, and product development workshops.",
    ],
    tags: ["Startup", "Entrepreneurship", "Venture Building", "Accelerator"],
  },
  {
    id: "digital-boost-agency",
    title: "Founder and CEO — Digital Boost",
    subtitle: "Full-service digital marketing, brand identity & web engineering",
    category: "Community",
    award: "Founder & CEO",
    organizer: "Digital Boost",
    date: "2024 - Present",
    year: "2024",
    badge: "🚀 Agency Founder",
    summary:
      "Founded Digital Boost to help regional businesses establish, strengthen, and grow their online presence through data-driven marketing, branding, SEO, paid campaigns, and web development.",
    highlights: [
      "Delivered end-to-end digital growth strategies for businesses across diverse sectors.",
      "Executed campaigns spanning social media marketing, SEO, paid ads, content creation, and web platforms.",
      "Bridge technology and marketing to build high-converting digital customer funnels.",
    ],
    tags: ["Digital Boost", "Digital Marketing", "SEO", "Branding", "Entrepreneurship"],
  },
  {
    id: "tiktok-creator-community",
    title: "Digital Creator & Influencer — 4M+ Views & 22K+ Followers",
    subtitle: "High-impact tech, digital skills & entrepreneurship content on TikTok (@the___pirate)",
    category: "Speaking",
    award: "4M+ Views & 22K+ Followers",
    organizer: "TikTok & Social Media (@the___pirate)",
    date: "2024 - Present",
    year: "2024",
    badge: "🔥 4M+ Views • 22K+ Followers",
    summary:
      "Digital communicator and content creator who has garnered over 4 million views across social media and built a vibrant community of more than 22,000 followers on TikTok (@the___pirate), sharing actionable tutorials, tech education, and youth empowerment content.",
    highlights: [
      "Generated over 4,000,000+ views across digital video content and social media campaigns.",
      "Cultivated an active community of 22,000+ followers on TikTok (@the___pirate).",
      "Demystified technology, modern coding tools, and career pathways for aspiring youth.",
      "Advocated for innovation, creator entrepreneurship, and sustainable social development.",
    ],
    tags: ["TikTok", "4M Views", "22k Followers", "Content Creator", "Viral Reach", "the___pirate"],
  },
  {
    id: "degree-thesis-defense",
    title: "B.Sc. in Information Technology — University of Hargeisa",
    subtitle: "Thesis Defense Class of 2026 — Faculty of Information Technology",
    category: "Award",
    award: "Bachelor of IT Degree",
    organizer: "University of Hargeisa",
    date: "2026",
    year: "2026",
    image: "/photos/thesis-defense-uoh.jpg",
    badge: "🎓 IT Graduate",
    summary:
      "Completed Bachelor's degree in Information Technology with a strong foundation in software engineering, system analysis, database management, and emerging technologies.",
    highlights: [
      "Successfully defended graduation thesis focused on practical digital transformation.",
      "Specialized in programming, systems design, and AI-enabled software solutions.",
    ],
    tags: ["University of Hargeisa", "Information Technology", "Degree", "Class of 2026"],
  },
  {
    id: "codveda-technologies-internship",
    title: "Front-End Development Internship Offer — Codveda",
    subtitle: "Professional engineering recognition and internship selection",
    category: "Award",
    award: "Internship Offer",
    organizer: "Codveda Technologies",
    date: "2024",
    year: "2024",
    badge: "💻 Engineering Selection",
    summary:
      "Received a competitive front-end development internship offer from Codveda Technologies, recognizing technical proficiency in modern JavaScript/TypeScript and UI engineering.",
    highlights: [
      "Selected following technical review of frontend code and component architectures.",
      "Contributed to clean code standards, responsive interfaces, and team workflows.",
    ],
    tags: ["Codveda Technologies", "Frontend", "React", "Internship"],
  },
  {
    id: "sylc-smart-volunteer",
    title: "Smart Volunteer Member — SYLC",
    subtitle: "Somaliland Youth Leadership Community",
    category: "Community",
    award: "Smart Volunteer",
    organizer: "SYLC",
    date: "2024 - Present",
    year: "2024",
    badge: "🤝 Leadership",
    summary:
      "Selected as a Smart Volunteer Member to contribute to youth development, capacity building, and community empowerment initiatives across Somaliland.",
    highlights: [
      "Collaborated with youth leaders on community-oriented civic programs.",
      "Advocated for digital inclusion and youth participation in the local knowledge economy.",
    ],
    tags: ["SYLC", "Youth Leadership", "Volunteering", "Civic Engagement"],
  },
  {
    id: "ai-ml-computer-vision",
    title: "AI & Computer Vision Innovations",
    subtitle: "Sign-language gesture recognition and facial recognition systems",
    category: "Project",
    award: "Technical Innovation",
    organizer: "Independent Research",
    date: "2024 - 2025",
    year: "2025",
    badge: "🤖 AI & Machine Learning",
    summary:
      "Engineered machine learning and computer vision applications utilizing Python, OpenCV, and deep learning libraries, including sign-language gesture translation and facial recognition systems.",
    highlights: [
      "Built sign-language gesture recognition models to bridge accessibility communication barriers.",
      "Developed biometric facial recognition pipelines with real-time video processing.",
      "Explored practical AI applications in automation, intelligent systems, and robotics.",
    ],
    tags: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Python", "Flutter"],
  },
];


