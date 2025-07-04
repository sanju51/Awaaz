"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from 'next/image';
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Form } from "@/components/ui/form"
import FormField from "@/components/FormField"


const authFormSchema = (type: FormType) => {
  return z.object({
    name:type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8)
   })
}

const AuthForm=({type}: {type:FormType}) => {
  const formSchema = authFormSchema(type)
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:"",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try{
      if(type=="sign-up"){
        console.log("SIGN UP", values);
      }
      else{
        console.log("SIGN IN", values);
      }
    }
    catch(error){
      console.log(error)
      toast.error("Something went wrong")
    }
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
        {!isSignIn && (
          <FormField control={form.control} name="name" label="Name" placeholder="Enter your Name" />
        )}
        <FormField control={form.control} name="email" label="Email" placeholder="Enter your Email address" type="email"/>
        <FormField control={form.control} name="password" label="Password" placeholder="Set your Password" type="password"/>
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