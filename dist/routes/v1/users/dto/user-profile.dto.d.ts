import { Username } from '../interfaces/username.interface';
import { Email } from '../interfaces/email.interface';
import { Photo } from '../interfaces/photo.interface';
export default class UserProfileDto {
    readonly email: string | null;
    readonly photos: Photo[];
    readonly emails: Email[];
    readonly name: Username;
    readonly course?: 'string';
    readonly hostel?: 'string';
    headman?: string;
    room?: number;
    phone?: string;
    parents?: string;
}
