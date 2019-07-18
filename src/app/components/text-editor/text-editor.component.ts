import {Component, Input, OnInit, SecurityContext, TemplateRef, ViewChild} from '@angular/core';
import {defaultText} from './default-text.const';
import {DomSanitizer} from '@angular/platform-browser';
import {ContextMenuComponent, ContextMenuService} from 'ngx-contextmenu';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
})
export class TextEditorComponent implements OnInit {
  @Input() text = defaultText;
  public textInView: string;
  @ViewChild(ContextMenuComponent) contextMenu: ContextMenuComponent;

  constructor(private sanitizer: DomSanitizer, private contextMenuService: ContextMenuService) {
  }

  ngOnInit() {
    this.textInView = this.sanitizer.sanitize(SecurityContext.HTML, this.text);
  }


  changeModel($event: Event) {

  }

  onContextMenu(event: MouseEvent): void {
    event.preventDefault();
    const element = event.target as HTMLElement;
    const currentState = element.classList;
    const word = element.textContent;

    this.contextMenuService.show.next({event, contextMenu: this.contextMenu, item: {}});
  }

  contextItemSelected($event: { event: Event; item: any }) {

  }
}
