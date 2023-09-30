import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './patient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientsService {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
      ) {}


    async getPatients(): Promise<Patient[]>{
        return this.patientRepository.find()
    }

    async getPatient(id: string): Promise<Patient | { error: 'not found'; } | undefined>{
        try {
            const patient = await this.patientRepository.findOne(
                {
                    where: {
                        id
                    }
                }
            )
            if(patient){
                return patient
            }else{
                return  {error: 'not found'}
            }
        } catch(err){
            
        }
    }

    async createPatient(
       patient: Partial<Patient>
    ) {
        try{
            const newPatient = this.patientRepository.create(patient)
            if(newPatient){
                const savedPatient = await this.patientRepository.save(newPatient);
                return savedPatient
            }
        }catch (err){
            throw(err)
        }

    }


}
