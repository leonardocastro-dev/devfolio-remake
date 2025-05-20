import { Html } from '@react-email/components'
import { Text } from '@react-email/components'

interface ContactMessageProps {
  name: string
  email: string
  message: string
}

export default function ContactMessage({
  name,
  email,
  message
}: ContactMessageProps) {
  return (
    <Html>
      <Text>
        <strong>Nome:</strong> {name}
      </Text>
      <Text>
        <strong>Email:</strong> {email}
      </Text>
      <Text>
        <strong>Mensagem:</strong>
      </Text>
      <Text>{message}</Text>
    </Html>
  )
}
