import { useSockeet } from "@/context/socket"
import { useEffect } from "react";

export default function Home() {
  const socket = useSockeet();

  useEffect(() => {
    socket?.on("connect", () => {
      console.log(socket.id)
    })
  },[socket])
  return (
    <h1>Welcome</h1>
  )
}
