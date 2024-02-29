/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VKpJTGCjvm8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="rounded-full p-1.5 relative group" size="icon" variant="ghost">
          <BellIcon className="w-4 h-4" />
          <Badge className="translate-x-2 translate-y-[-2px] absolute top-0.5 -right-1.5">3</Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mt-1 p-0">
        <Card>
          <CardContent className="p-4">
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardContent>
          <CardContent className="p-4 grid gap-4">
            <div className="flex items-center space-x-4">
              <img
                alt="Avatar"
                className="rounded-full"
                height={32}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
              <div className="text-sm flex flex-col">
                <p className="font-medium">Your call has been confirmed.</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">5 min ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                alt="Avatar"
                className="rounded-full"
                height={32}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
              <div className="text-sm flex flex-col">
                <p className="font-medium">You have a new message!</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">1 min ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                alt="Avatar"
                className="rounded-full"
                height={32}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
              <div className="text-sm flex flex-col">
                <p className="font-medium">Your subscription is expiring soon!</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}
