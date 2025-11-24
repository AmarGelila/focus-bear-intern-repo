export default function sumNumbers(...numbers) {
  const res = numbers.reduce((sum, num) => {
    sum += num;
    return sum;
  }, 0);
  return res;
}
