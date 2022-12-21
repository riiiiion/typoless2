//グローバルで使用したい変数を宣言
//変数と更新用の関数を定義すること

export let correctTypingCounter = 0;
export const setCorrectTypingCounter = (num: number) => {
  correctTypingCounter = num
}

export let inCorrectTypingCounter = 0;
export const setInCorrectTypingCounter = (num: number) => {
  inCorrectTypingCounter = num
}

export let totalTypingCounter = 0;
export const setTotalTypingCounter = (num: number) => {
  totalTypingCounter = num
}

export let loginUserData:{name: string, high_score: number, icon: string} = { name: "ゲスト", high_score: 39.03, icon: "icon-default.webp"};
export let setLoginUserData = (userData:{name: string, high_score: number, icon: string}) => {
  loginUserData = userData;
  console.log(loginUserData);
}

//タイピング遅い時のダメージ　%表示
export let damageRatio = 5;
export let setDamageRatio = (num: number) => {
  damageRatio = num;
  console.log(damageRatio);
};

//タイポ時のダメージ　%表示
export let typoDamageRatio = 5;
export let setTypoDamageRatio = (num: number) => {
  typoDamageRatio = num;
  console.log(typoDamageRatio);
};

//m秒表示
export let damageInterval = 500;
export let setDamageInterval = (num: number) => {
  damageInterval = num;
  console.log(damageInterval);
};
