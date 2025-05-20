import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input'
import Textarea from '@/components/ui/textarea'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      if (!res.ok) {
        throw new Error('Error sending message')
      }

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
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
          value={form.name}
          onChange={handleChange}
        />
        <Input
          label="_email:"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <Textarea
          label="_message:"
          name="message"
          value={form.message}
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
