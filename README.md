# React Masterclass

Learn and dominate the React ecosystem once and for all.

### Using:

- Styled Components
- Recoil
- React Query
- React Router DOM
- Apex Charts
- React Spring
- Typescript
- Firebase


- React Hook Form
- Selectors
    - derived state를 나타냅니다.
    - derived state
        - state를 입력 받아서 그걸 변형해 반환하는 순수함수를 거쳐 반환된 값을 말합니다.
- useRecoilValue
    - atom 또는 selector의 값을 반환 : 값만 얻고 싶다면
- useRecoilState
    - 값과 더불어서 modifier 함수도 제공

- Qestion
    - useState﹤{loading: boolean}＞(true) this won't work.
    - It should be like this because you are telling to TS that the state is an object with a boolean property:

    - useState﹤{loading: boolean}＞({loading:true})

enum : enumerable
    - 원하는 string들로 enumerable을 만들고