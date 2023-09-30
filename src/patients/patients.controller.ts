import { Body, Controller, Post } from '@nestjs/common';
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

}
