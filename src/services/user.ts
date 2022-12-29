import { http } from "../adapters";

export const getUserAvatar = async (id: number): Promise<string> => {
  const response = await http.get(`/photos/${id}`);

  return (response.data as unknown as any).url as string;
};
