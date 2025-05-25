import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input'
import Textarea from '@/components/ui/textarea'
import { useState } from 'react'
import { useInputStore } from '@/components/ui/input-store'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormData, contactFormSchema } from '../schemas/contact'

export default function ContactForm() {
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')
  const setValue = useInputStore((state) => state.setValue)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setValue(field, value)
  }

  const onSubmit = async (data: ContactFormData) => {
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!res.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      reset()
      setValue('name', '')
      setValue('email', '')
      setValue('message', '')
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
    }
  }

  const handleNewMessage = () => {
    setStatus('idle')
    reset()
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center py-4 px-9 justify-center overflow-y-auto border-r border-primary-200 custom-scrollbar max-h-full xl:pt-72 xl:justify-start">
        <h2 className="text-[26px] mb-2.5 font-bold text-primary">
          Thank you! 🤘
        </h2>
        <p className="max-w-[382px] mb-9 text-center text-lg text-muted-200">
          Your message has been accepted. You will recieve answer really soon!
        </p>
        <Button onClick={handleNewMessage} className="w-fit">
          send-new-message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center py-4 px-9 justify-center overflow-y-auto border-r border-primary-200 custom-scrollbar max-h-full xl:pt-30 xl:justify-start"
    >
      <div className="flex flex-col w-full max-w-[372px] gap-6">
        <div>
          <Input
            label="_name:"
            {...register('name', {
              onChange: (e) => handleInputChange('name', e.target.value)
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input
            label="_email:"
            {...register('email', {
              onChange: (e) => handleInputChange('email', e.target.value)
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Textarea
            label="_message:"
            {...register('message', {
              onChange: (e) => handleInputChange('message', e.target.value)
            })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button className="w-fit" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'sending...' : 'submit-message'}
        </Button>

        {status === 'error' && (
          <p className="text-red-500">Failed to send. Please try again.</p>
        )}
      </div>
    </form>
  )
}
