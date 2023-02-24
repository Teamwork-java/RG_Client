import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayerRef: ElementRef;

  videoUrl: string = "";

  constructor(elem: ElementRef) {
    this.videoPlayerRef = elem;
  }

  ngOnInit() {
    const videoPath = 'http://localhost:8080/media/audio/1';
    this.videoUrl = this.getHlsUrl(videoPath);
  }

  getHlsUrl(url: string): string {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const hlsUrl = isSafari ? url.replace('.mp4', '.m3u8') : url;
    return hlsUrl;
  }
}
