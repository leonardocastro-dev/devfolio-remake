export function getCode({
  name,
  email,
  message,
  date
}: {
  name: string
  email: string
  message: string
  date: string
}) {
  return `
const button = document.querySelector('#sendBtn');

const message = {
 name: "${name}",
 email: "${email}",
 message: "${message}",
 date: "${date}"
}

button.addEventListener('click', () => {
 form.send(message);
})
`
}
