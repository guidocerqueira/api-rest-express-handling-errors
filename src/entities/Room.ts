import {
	Column,
	Entity,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Subject } from './Subject'
import { Video } from './Video'

@Entity('rooms')
export class Room {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'text' })
	name: string

	@Column({ type: 'text', nullable: true })
	description: string

	@OneToMany(() => Video, video => video.room)
	videos: Video[]

	@ManyToMany(() => Subject, subject => subject.rooms)
	subjects: Subject[]
}
