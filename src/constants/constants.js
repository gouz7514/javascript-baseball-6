export const OUTPUT_MESSAGE = {
  startGame: '숫자 야구 게임을 시작합니다.',
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