// https://www.codewars.com/kata/5351b35ebaeb67f9110012d2

function createSecretHolder(value) {
  let secret = value;
  return {
    setSecret(numb) {
      secret = numb;
    },
    getSecret() {
      return secret;
    },
  };
}