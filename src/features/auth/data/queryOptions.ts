import { useMutation } from "@tanstack/react-query";
import { loginService } from "./api";

export function useLoginMutation() {
return useMutation({
mutationFn: (payload: {
email: string;
password: string;
}) => loginService(payload),
});
}
