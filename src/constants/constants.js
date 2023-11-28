export const OUTPUT_MESSAGE = {
  startGame: '숫자 야구 게임을 시작합니다.',
  endGame: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
}

export const INPUT_MESSAGE = {
  getUserNumber: '숫자를 입력해주세요 : ',
  restartGame: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
}

export const NUMBER = {
  length: 3,
  min: 1,
  max: 9,
}

export const ERROR_MESSAGE = {
  inValidLength: `[ERROR] 숫자는 ${NUMBER.length}자리만 입력 가능합니다.`,
  inValidNumber: '[ERROR] 숫자만 입력 가능합니다.',
  inValidNumberRange: `[ERROR] 숫자는 ${NUMBER.min}~${NUMBER.max}까지만 입력 가능합니다.`,
  duplicateNumber: '[ERROR] 중복되지 않는 숫자를 입력해주세요.',
}