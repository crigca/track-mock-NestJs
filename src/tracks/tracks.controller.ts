import { Controller, Get, Param, Post, Put, Delete, Body } from "@nestjs/common";
import { TracksService } from "./tracks.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { UpdateTrackDto } from "./dto/update-track.dto";

@Controller("tracks")

export class TracksController {
    constructor(private readonly tracksService: TracksService) {}

    @Get()
    async findAll() {
        return this.tracksService.findAll();
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        return this.tracksService.findOne(Number(id));
    }

    @Post()
    async create(@Body() createTrackDto: CreateTrackDto) {
      return this.tracksService.create(createTrackDto);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTrackDto: UpdateTrackDto) {
      return this.tracksService.update(Number(id), updateTrackDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.tracksService.delete(Number(id));
    }
}