#  My React Data Breadcrumb

## 실행법
```
npm ci
npm run build
npm run preview
```

그리고 http://localhost:4173/으로 이동하여 주세요.

## 구현 기능
요구사항 구현
- 라우트 구조 반영
- URL의 변화에 따라 해당하는 페이지 경로 구현
- 각 라우트는 모두 독립적으로 존재하며 내부에서 Breadcrumb를 가진다.
- 부모 라우트와의 관계를 내부로직에 반영 하여야 한다.
- 각 경로를 클릭시 해당하는 URL로 이동해야 하고, 현재 경로에 대해서는 링크로 동작하지 않도록 한다. 
- 각 URL에 해당되는 데이터를 Breadcrumb에 전달하여 변수에 해당하는 라우트 이름을 적절하게 출력할 수 있어야 하며 이를 위한 validation을 반영하여야 한다.

추가 기능 구현
- 모바일에서 중간 경로 생략을 통해 UI를 최적화
- 데이터가 로딩이 되는 경우를 반영하여 구현


## 사용한 기술
- React 19
- Typescript
- React Router
- Tanstack Query
- vanilla-extract


