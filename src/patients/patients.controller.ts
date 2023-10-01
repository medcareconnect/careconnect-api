import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from './patient.entity';

@Controller('patients')
export class PatientsController {

    constructor(private readonly patientsService: PatientsService){

    }

    @Post()
    async create(@Body() newPatient: Partial<Patient>){
        const createdPatient = await this.patientsService.createPatient(newPatient); 
        return createdPatient;
    }

    @Get()
    async get(){
        const patient = await this.patientsService.getPatients(); 
        return patient;
    }

    @Get(':id')
    async getPatientById(@Param('id') id: string){
        const patient = await this.patientsService.getPatient(id); 
        return patient;
    }

}
