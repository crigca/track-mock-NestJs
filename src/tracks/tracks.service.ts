import { Injectable } from "@nestjs/common";
import tracks from "./mocks/tracks.mock.json";
import { CreateTrackDto } from "./dto/create-track.dto";
import { UpdateTrackDto } from "./dto/update-track.dto";


@Injectable()
export class TracksService{
    private tracks = tracks;

findAll(){
    return this.tracks;
}

async findOne(id: number) {
    return this.tracks.find(track => track.id === id);
}

async create(createTrackDto: CreateTrackDto) {
    const newTrack = {
        id: this.tracks.length + 1,
        ...createTrackDto,
    };
    this.tracks.push(newTrack);
    return newTrack;
}

async update(id: number, updateTrackDto: UpdateTrackDto) {
    const trackIndex = this.tracks.findIndex(track => track.id === id);
    if(trackIndex === -1){
        return null;
    }
    this.tracks[trackIndex] = {...this.tracks[trackIndex], ...updateTrackDto};
    return this.tracks[trackIndex];
}

async delete(id: number) {
    const trackIndex = this.tracks.findIndex(track => track.id === id);
    if(trackIndex === -1) {
        return null;
    }
    const deleteTrack = this.tracks.splice(trackIndex, 1);
    return deleteTrack[0];
 }

}