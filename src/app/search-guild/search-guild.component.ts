import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Guild } from '../Models/Guild';
import { JsonPipe } from '@angular/common';
import { debuglog } from 'util';


@Component({
  selector: 'app-search-guild',
  templateUrl: './search-guild.component.html',
  styleUrls: ['./search-guild.component.css']
})
export class SearchGuildComponent implements OnInit {

  guildName: string;
  guildRealm: string;
  guildRegion: string;
  response: any;
  raidProg: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  searchGuild() {
    var params = new HttpParams()
    .set("name", this.guildName)
    .set("realm",this.guildRealm)
    .set("region",this.guildRegion)
    .set("fields", "raid_progression");

    this.http.get('https://raider.io/api/v1/guilds/profile',{params}).subscribe((response) => {
      this.response = response;
      console.log(JSON.stringify(this.response.raid_progression));
      for(var property in this.response.raid_progression){
        console.log(property + "\\\\\\" + JSON.stringify(this.response.raid_progression[property]))
      }
    });
    
    
  }

  debugLog(){
    
  }

}
