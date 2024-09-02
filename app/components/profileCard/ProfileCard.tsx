import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface PropType {
  name: string;
  designation: string;
  image: string;
}
interface ProfileCardProps {
  prop: PropType;
}
const ProfileCard: React.FC<ProfileCardProps> = ({
  prop: { name, designation, image },
}) => {
  return (
    <>
      <div
        className="flex flex-col w-64"
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >
        <div className="flex  align-center items-center">
          <div>
            <Avatar className="w-16 h-16 m-2 ">
              <AvatarImage
                src={image ? image : "https://github.com/shadcn.png"}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-xl text-center"> {name}</h1>

            <p className="text-base">
              {designation ? designation : "Something goes here"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
