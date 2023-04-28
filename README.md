# [Youtube](https://celebrated-monstera-6b9719.netlify.app/)

### 유튜브 클론코딩

<br>
<br>

# 📝프로젝트 정보

<br>

### 💡 개발기간

- 2023.02.28 ~ 2023.03.28
  <br>
  <br>

### 🔨 프로젝트에 사용된 기술<br>

<img src="https://img.shields.io/badge/React-17202C?style=for-the-badge&logo=react&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/Reactquery-FFFFFF?style=for-the-badge&logo=Reactquery&logoColor=FF4154"/> <img src="https://img.shields.io/badge/hmtl5-E34F26?style=for-the-badge&logo=HTML5&logoColor=FFFFFF"/> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=FFFFFF"/> <img src="https://img.shields.io/badge/javascript-191A1B?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img src="https://img.shields.io/badge/tailwind css-FFFFFF?style=for-the-badge&logo=tailwind css&logoColor=06B6D4"/>
<br>
<br>

### 📎 홈페이지 구성

- Home
- Video Detail Page

  <br>

# 🎫 실행화면

<img width="80%" src="https://user-images.githubusercontent.com/102341066/235082450-3072d070-6cbb-445c-8e48-4fedc86faefb.gif"/>

<br>
<br>

# 🔎 핵심 기능보기 🔎

## 🔑 실제 API 사용

재사용성, 유지보수를 위해 네트워크통신은 api폴더에 보관/=> 가져와 컴포넌트에서 사용

`youtube.js` 에서 class를 이용 `프라이빗함수` 생성

```js
//검색 키워드가 있으면 검색관한 데이터, 아니면 인기동영상표시
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
```

```js
`YotubeApiContext.jsx`;

// const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client);
```

※하루 서버 접근제한수가 있음※<br>
`fakeYoutubeClient.js` 에서는 postman에서 받아온 데이터를 복사한 json파일을 생성/ =>가져와 사용
`YoutubeClient.js` 실제 youtube api를 이용
`Videos` component에서는 `Contextapi`로부터 공유받은 인스턴스를 가져와 `search함수` 사용

```js
`Videos.jsx`;

const { keyword } = useParams();
const { youtube } = useYoutubeApi();
const {
  isLoading,
  error,
  data: videos,
} = useQuery(["videos", keyword], () => youtube.search(keyword), {
  staleTime: 1000 * 60 * 1,
});
```

