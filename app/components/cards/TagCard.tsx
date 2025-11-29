import Link from "next/link";
import { Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ROUTES from "@/constants/routes";

interface TagCardProps {
  id: number;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({ id, name, questions, showCount, compact }: TagCardProps) => {
  return (
    <Link key={id} href={ROUTES.TAGS(id)} className="flex justify-between">
      <Badge variant="destructive" className="flex gap-1">
        <Flame />
        {name}
      </Badge>
      {showCount && <p className="text-xs">{questions}+</p>}
    </Link>
  );
};

export default TagCard;
