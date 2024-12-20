import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { Sancreek } from "next/font/google"

const sancreek = Sancreek({
	subsets: ["latin"],
	weight: "400",
})

export default function Contact() {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm("service_zgh1e4s", "template_ti83d8y", form.current, {
				publicKey: "KjIdp21mPwYarJZhC",
			})
			.then(
				() => {
					console.log("SUCCESS!")
					e.target.reset()
				},
				(error) => {
					console.log("FAILED...", error.text)
				}
			)
	}

	return (
		<div className="min-h-screen w-full flex justify-center items-center">
			<div
				className={`w-[500px] h-[500px] flex flex-col justify-center items-center bg-yellow-800 bg-opacity-50 rounded-xl py-8 ${sancreek.className}`}
			>
				<div className="text-5xl pt-3">CONTACT US</div>
				<form
					className="w-full h-full flex flex-col justify-center items-center p-4 px-10 gap-3"
					onSubmit={sendEmail}
					ref={form}
				>
					<input
						className="input-style"
						id="name"
						type="text"
						placeholder="Name"
						name="name"
					/>

					<input
						className="input-style"
						id="email"
						type="email"
						placeholder="Email"
						name="email"
					/>

					<input
						className="input-style"
						id="subject"
						type="text"
						placeholder="Subject"
						name="subject"
					/>

					<textarea
						className="input-style"
						id="text"
						rows={5}
						name="message"
					/>
					<input
						className="text-white bg-yellow-900 bg-opacity-80 hover:bg-opacity-100 w-28 h-10 rounded-lg cursor-pointer"
						id="submit"
						type="submit"
						value="Send"
					/>
				</form>
			</div>
		</div>
	)
}
