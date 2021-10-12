const CLIENT_ID = "03598b5ba2cf770c49a43324f9cc8367"
const REDIRECT_URI = "http://localhost:3000/oauth/kakao"

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`