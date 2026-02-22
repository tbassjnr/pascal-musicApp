import { Component, OnInit } from '@angular/core';
import { ProtocolPersonnel } from '../../core/model/interface/protocol.interface';
import { ProtocolService } from '../../core/model/service/protocol.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protocol',
  imports: [CommonModule],
  templateUrl: './protocol.html',
  styleUrl: './protocol.css',
})
export class Protocol implements OnInit{
    teamMembers: ProtocolPersonnel[] = [];

  constructor(private protocolService: ProtocolService) {}

  ngOnInit(): void {
    this.protocolService.getProtocolTeam().subscribe(data => {
      this.teamMembers = data;
    });
  }
}
