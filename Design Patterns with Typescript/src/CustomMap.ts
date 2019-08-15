interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(public selectorId: string) {
    const container = document.getElementById(selectorId);
    this.googleMap = new google.maps.Map(container, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable) {
    const {
      location: { lat, lng }
    } = mappable;

    new google.maps.Marker({
      map: this.googleMap,
      position: { lat, lng }
    });
  }
}
