import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input'
import Textarea from '@/components/ui/textarea'
import { useState } from 'react'
import { useInputStore } from '@/components/ui/input-store'

export default function ContactForm() {
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')

  const values = useInputStore((state) => state.values)
  const setValue = useInputStore((state) => state.setValue)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setValue(e.target.name, e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      if (!res.ok) {
        throw new Error('Error sending message')
      }

      setStatus('success')
      setValue('name', '')
      setValue('email', '')
      setValue('message', '')
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center pb-4 pt-30 px-9 overflow-y-auto border-r border-primary-200 custom-scrollbar max-h-full"
    >
      <div className="flex flex-col w-full max-w-[372px] gap-6">
        <Input
          label="_name:"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <Input
          label="_email:"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <Textarea
          label="_message:"
          name="message"
          value={values.message}
          onChange={handleChange}
        />
        <Button className="w-fit" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'submitting...' : 'submit-message'}
        </Button>
        {status === 'success' && (
          <p className="text-green-500">Message sent!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500">Error sending. Try again.</p>
        )}
      </div>
    </form>
  )
}
