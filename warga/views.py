from django.views.generic import ListView
from .models import Warga
from django.views.generic import DetailView

class WargaListView(ListView):
    model = Warga

class WargaDetailView(DetailView):
    model = Warga