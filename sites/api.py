from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import SiteSerializer
from .models import Site

class SiteAPI(APIView):

    def get(self, request):
        return Response(SiteSerializer(Site.objects.all(), many=True).data)


