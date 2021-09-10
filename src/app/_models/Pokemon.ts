export class Pokemon{
    id: number;
    name: NameDto;
    sprite: string;
    thumbnail: string;
    hires: string;


}
interface NameDto {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}
