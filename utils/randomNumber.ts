export default function randomNumber(): string {
  const number = Math.floor(Math.random() * 10000);

  return number.toString();
}
