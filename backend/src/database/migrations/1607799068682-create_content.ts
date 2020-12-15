import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createContent1607799068682 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'contents',
            columns: [
              {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'title',
                type: 'varchar',
                isUnique: true,
              },
              {
                name: 'link',
                type: 'varchar',
                isUnique: true,             
               
              },          
                        
             
            ],
         
          }))
        }
      
        public async down(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.dropTable('contents')
        }
      
      }