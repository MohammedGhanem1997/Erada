import { Module } from '@nestjs/common';
import { SidebarController } from './sidebar.controller';
import { SidebarService } from './sidebar.service';
import { Sidebar } from './sidebar.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { StaffModule } from 'src/staff/staff.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Sidebar]),
    AuthModule,
    StaffModule,
  ],
  controllers: [SidebarController],
  providers: [SidebarService],
  exports: [SidebarService],
})
export class SidebarModule {}
