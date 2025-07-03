"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from 'next/image';

import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Form } from "@/components/ui/form"




const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const AuthForm=({type}: {type:FormType}) => {
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const isSignIn=type=='sign-in';
    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-row gap-2 justify center">
                <Image src="/logo.svg" alt="logo" height={32} width={38} />
                
                <h2 className="text-primary-100">Awaaz</h2>
            </div>
            <h3>Learn with us</h3>
            
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-6 mt-4 form">
        {!isSignIn && <p>Name</p>}
        <p>Email</p>
        <p>Password </p>
        <Button className="btn" type="submit">{isSignIn?'Sign in':"Create an account"}</Button>
      </form>
    </Form>
    
    <p className="text-center">
      {isSignIn ?"No account?": "Already have an account?"}
      <Link href={!isSignIn?'/sign-in':'/sign-up'} className="font-bold text-user-primary  ml-1">
        {!isSignIn ? "Sign in" : "Sign up"}
      </Link>
    </p>
    </div>
    </div>
    )
}

export default AuthForm;