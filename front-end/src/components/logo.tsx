import { RocketIcon } from "@radix-ui/react-icons";

export function Logo() {
    return (
        <div className="bg-primary h-8 w-8 flex items-center justify-center rounded-md">
            <RocketIcon className="w-3 h-3 text-primary-foreground" />
        </div>
    )
}