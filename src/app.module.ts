import { Module } from "@nestjs/common";
import { TasksModule } from './tasks/tasks.module';

// Root Module
@Module({
  imports: [TasksModule],
})
export class AppModule {}
