

# 💧 Gulpy

> 물 마시는 습관을 만들어주는 **모바일 전용 PWA(Web App)**

Gulpy는 사용자가 물 마시는 시간을 잊지 않도록 도와주는 웹 애플리케이션입니다.
목표 수분 섭취량을 설정하고, 원하는 주기로 푸시 알림을 받아 간편하게 물 섭취를 기록할 수 있습니다.

> 📱 **모바일 환경에 최적화된 PWA입니다.**

---


## 📸 주요 화면

* 랜딩
* 로그인
* 온보딩
* 대시보드
* 물 섭취 기록
* 설정



---

# ✨ 주요 기능

* ✅ 이메일 로그인
* ✅ 하루 목표 수분 섭취량 설정
* ✅ 알림 주기 설정
* ✅ OneSignal 웹 푸시 알림
* ✅ 물 섭취 기록
* ✅ 오늘 섭취량 확인
* ✅ 남은 목표량 계산
* ✅ PWA 설치 지원

---

# 📱 모바일 전용 웹앱

Gulpy는 **모바일 사용 경험**을 중심으로 제작되었습니다.

* PWA 설치 지원
* 홈 화면 추가 가능
* 전체 화면(Standalone) 실행
* 모바일 UI 최적화
* 웹 푸시 알림 지원

---

# 🛠️ 기술 스택

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* Firebase Authentication
* Cloud Firestore
* Firebase Admin SDK
* Next.js Route Handler
* OneSignal
* Web Push

### Deployment

* Vercel

---

# 📂 프로젝트 구조

```text
src
├── app
│   ├── api
│   ├── components
│   ├── dashboard
│   ├── login
│   ├── onboarding
│   ├── utils
│   └── lib
├── public
└── middleware.ts
```

---

# 👤 사용자 플로우

## 최초 이용

```text
랜딩

↓

이메일 로그인

↓

목표 수분량 설정

↓

알림 주기 설정

↓

대시보드
```

---

## 일반 사용

```text
푸시 알림

↓

앱 실행

↓

+250ml 버튼 클릭

↓

섭취 기록 저장

↓

오늘 섭취량 갱신
```

---

# 📄 페이지 구성

| 페이지           | 설명             |
| ------------- | -------------- |
| `/`           | 랜딩 페이지         |
| `/login`      | 이메일 로그인        |
| `/onboarding` | 목표량 및 알림 설정    |
| `/dashboard`  | 오늘 섭취량 확인      |
| `/onboarding`   | 목표량 및 알림 설정 변경 |

---

# 🗂️ 데이터 구조

## users

```ts
{
  uid: string,
  email: string,
  target: number,
  interval: number,
  now: number,
  nextSendAt: string,
  onboarding: boolean
}
```


---

# 🔔 푸시 알림 동작

```text
사용자 로그인

↓

브라우저 알림 허용

↓

OneSignal Player 등록

↓

external_id 연결

↓

Cron API 실행

↓

OneSignal API 호출

↓

푸시 알림 전송
```

알림 예시

```text
💧 Gulpy

물 마실 시간입니다!
목표까지 750ml 남았어요.
```

---

# 🎯 UX 목표

* 가장 중요한 기능인 **+250ml 버튼**을 크게 배치
* 최소한의 클릭으로 물 섭취 기록
* 직관적인 모바일 UI
* 빠른 기록과 즉각적인 피드백 제공

---


# 💼 프로젝트에서 사용한 기술

* Next.js App Router
* Server Component / Client Component
* Firebase Authentication
* Firestore
* Firebase Admin SDK
* OneSignal Push Notification
* Route Handler
* PWA
* TypeScript
* Tailwind CSS

